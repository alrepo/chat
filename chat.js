$('.chatCovoBox').scrollTop($('.chatCovoBox')[0].scrollHeight);

document.querySelector(".chatCovoBox").style.backgroundImage = "url('whatsapp_background_image.jpg')";

$(document).ready(function(){
    resizeDiv();
});

window.onresize = function(event) {
    resizeDiv();
}

function resizeDiv() {
    vpw = $(window).width();
    vph = $(window).height();
    $("#chatBox").css({"height": vph + "px"});
}

// firebase.database().ref().child("Chat").on("child_added", function (snapshot) {
// if(snapshot.key!=(firebase.auth().currentUser.uid))
// {
//
//  var snapData =snapshot.val();
//  var otherMessages = snapData.Messages.chatMessage;
//
//  var innerHtml = document.querySelector(".chatCovoBox").innerHTML;
//  innerHtml += "<div class=\"chatRow mb-2 text-left\"><div class=\"container myChatText text-right\"><span class=\"myName text-center\">"+(snapshot.key+"").slice(0, 5)+"</span><br><span class=\"myText d-flex self-align-end\">"+otherMessages+"</span></div></div>";
//    document.querySelector(".chatCovoBox").innerHTML = innerHtml;
//
//    console.log(snapData.Messages.chatMessage);
//
// }
// });
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
    var othersMessagesDateAndTime = changedPost.Messages.shortDate;

    var audio = document.getElementById("audio");
    audio.play();
    var innerHtml = document.querySelector(".chatCovoBox").innerHTML;
    innerHtml += "<div class=\"chatRow mb-2 text-left\"><div class=\"container othersChatText text-right\"><span class=\"myName text-center\">"+(snapshot.key+"").slice(0, 5)+"</span><br><span class=\"myText d-flex self-align-end\">"+othersMessages+"</span></div><p>Time</p></div>";
      document.querySelector(".chatCovoBox").innerHTML = innerHtml;
    console.log(snapshot.key+" : "+othersMessages);
    //START - To Keep the Scroll Pinned Down //
    var messageBody = document.querySelector('.chatCovoBox');
    messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
    //END - To Keep the Scroll Pinned Down //
    var audio = document.getElementById("audio");
    audio.play();
  }

});

document.querySelector("#chatInputMessage").addEventListener("focus", function(){
  $('.chatBox').scrollTop($('.chatBox')[0].scrollHeight);
});

document.querySelector("#chatSendButton").addEventListener("click", function()
{
  const chatMessage = document.querySelector("#chatInputMessage").value;
  const individualChatDateAndTime= (new Date().toDateString())+", "+(new Date().toLocaleTimeString());
  document.querySelector("#chatInputMessage").value ="";

  var chatRef = firebase.database().ref().child("Chat");
  var userID = firebase.auth().currentUser.uid;
  // var otherID = firebase.auth().
  var userRef = chatRef.child(userID);
  var myMessages = userRef.child("Messages");

  if(chatMessage!="")
  {
    var innerHtml = document.querySelector(".chatCovoBox").innerHTML;
    const individualChatDateAndTime = (new Date().toDateString())+", "+(new Date().toLocaleTimeString());

    innerHtml += "<div class=\"chatRow mb-2 text-right\"><div class=\"container myChatText text-right\"><span class=\"myName text-center\">أنا</span><br><span class=\"myText d-flex self-align-end\">"+chatMessage+"</span><span class=\"d-flex individualChatTime mt-0 self-align-end\">"+individualChatDateAndTime+"</span></div></div>";
      document.querySelector(".chatCovoBox").innerHTML = innerHtml;

      var completeDate = new Date();
      console.log(completeDate);

      var userData =
        {
          "chatMessage": chatMessage,
          "completeTimeAndDate": ""+completeDate,
          "individualChatDateAndTime": individualChatDateAndTime
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

document.querySelector("#chatInputMessage").addEventListener("keypress", function (e) {
    if (e.key === "Enter")
    {

      const chatMessage = document.querySelector("#chatInputMessage").value;
      const individualChatDateAndTime = (new Date().toDateString())+", "+(new Date().toLocaleTimeString());

      document.querySelector("#chatInputMessage").value ="";

      var chatRef = firebase.database().ref().child("Chat");
      var userID = firebase.auth().currentUser.uid;
      // var otherID = firebase.auth().
      var userRef = chatRef.child(userID);
      var myMessages = userRef.child("Messages");

      if(chatMessage!="")
      {
        const individualChatDateAndTime = (new Date().toDateString())+", "+(new Date().toLocaleTimeString());

        var innerHtml = document.querySelector(".chatCovoBox").innerHTML;
        innerHtml += "<div class=\"chatRow mb-2 text-right\"><div class=\"container myChatText text-right\"><span class=\"myName text-center\">أنا</span><br><span class=\"myText d-flex self-align-end\">"+chatMessage+"</span><span class=\"d-flex individualChatTime mt-0 self-align-end\">"+individualChatDateAndTime+"</span></div></div>";
          document.querySelector(".chatCovoBox").innerHTML = innerHtml;

          var completeDate = new Date();
          console.log(completeDate);

          var userData =
            {
              "chatMessage": chatMessage,
              "completeTimeAndDate": ""+completeDate,
              "individualChatDateAndTime": individualChatDateAndTime
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
       $('.chatBox').scrollTop($('.chatBox')[0].scrollHeight);
      }
    }
});
 // Disable form submit on "Enter" key pressing
$(document).on("keypress", 'form', function (e) {
    var code = e.keyCode || e.which;
    if (code == 13) {
        e.preventDefault();
        return false;
    }
});
// To prevent the delay in database retrieval from disabling the scroll pinned down. So, the below only execute last
window.onload = function() {
  //START - To Keep the Scroll Pinned Down //
  var messageBody = document.querySelector('.chatCovoBox');
  messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
  //END - To Keep the Scroll Pinned Down //
  $('.chatBox').scrollTop($('.chatBox')[0].scrollHeight);
};
