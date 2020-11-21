$('.chatCovoBox').scrollTop($('.chatCovoBox')[0].scrollHeight);

firebase.database().ref().child("Chat").on("value", function (snapshot) {
if(snapshot.key!=(firebase.auth().currentUser.uid))
{

 var snapData =snapshot.val();
 var otherMessages = snapData.Messages.chatMessage;

 var innerHtml = document.querySelector(".chatCovoBox").innerHTML;
 innerHtml += "<div class=\"chatRow mb-2 text-left\"><div class=\"container myChatText text-right\"><span class=\"myName text-center\">"+(snapshot.key+"").slice(0, 5)+"ر</span><br><span class=\"myText d-flex self-align-end\">"+otherMessages+"</span></div></div>";
   document.querySelector(".chatCovoBox").innerHTML = innerHtml;

   console.log(snapData.Messages.chatMessage);

}
});
firebase.database().ref().child("Chat").on("child_changed", function(snapshot) {

  var changedPost = snapshot.val();

  if(snapshot.key==(firebase.auth().currentUser.uid))
  {
    // var myMessages = changedPost.Messages.chatMessage;
    // var innerHtml = document.querySelector(".chatCovoBox").innerHTML;
    // innerHtml += "<div class=\"chatRow mb-2 text-left\"><div class=\"container myChatText text-right\"><span class=\"myName text-center\">زائر</span><br><span class=\"myText d-flex self-align-end\">"+myMessages+"</span></div></div>";
    //   document.querySelector(".chatCovoBox").innerHTML = innerHtml;
    // console.log(snapshot.key+" : "+myMessages);
  }
  else
  {
    var othersMessages = changedPost.Messages.chatMessage;

    var innerHtml = document.querySelector(".chatCovoBox").innerHTML;
    innerHtml += "<div class=\"chatRow mb-2 text-left\"><div class=\"container othersChatText text-right\"><span class=\"myName text-center\">"+(snapshot.key+"").slice(0, 5)+"</span><br><span class=\"myText d-flex self-align-end\">"+othersMessages+"</span></div></div>";
      document.querySelector(".chatCovoBox").innerHTML = innerHtml;
    console.log(snapshot.key+" : "+othersMessages);
    //START - To Keep the Scroll Pinned Down //
    var messageBody = document.querySelector('.chatCovoBox');
    messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
    //END - To Keep the Scroll Pinned Down //
  }

});

document.querySelector("#chatSendButton").addEventListener("click", function()
{
  const chatMessage = document.querySelector("#chatInputMessage").value;
  document.querySelector("#chatInputMessage").value ="";

  var chatRef = firebase.database().ref().child("Chat");
  var userID = firebase.auth().currentUser.uid;
  // var otherID = firebase.auth().
  var userRef = chatRef.child(userID);
  var myMessages = userRef.child("Messages");

  if(chatMessage!="")
  {
    var innerHtml = document.querySelector(".chatCovoBox").innerHTML;
    innerHtml += "<div class=\"chatRow mb-2 text-right\"><div class=\"container myChatText text-right\"><span class=\"myName text-center\">أنا</span><br><span class=\"myText d-flex self-align-end\">"+chatMessage+"</span></div></div>";
      document.querySelector(".chatCovoBox").innerHTML = innerHtml;
        var userData =
        {
          "chatMessage": chatMessage,
        };
        myMessages.set(userData, function(error){
         if(error)
          {
           alert("Error!");
          }
         else
          {
          }
      });
      // listen for incoming messages
      myMessages.on("child_added", function (snapshot) {

      var snapData =snapshot.val();
      // console.log(snapData);
   });
   //START - To Keep the Scroll Pinned Down //
   var messageBody = document.querySelector('.chatCovoBox');
   messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
   //END - To Keep the Scroll Pinned Down //
  }

});

window.onload = function() {
  //START - To Keep the Scroll Pinned Down //
  var messageBody = document.querySelector('.chatCovoBox');
  messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
  //END - To Keep the Scroll Pinned Down //
};
