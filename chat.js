<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <!--    <meta name="viewport" content="width=device-width, initial-scale=1.0" charset="utf-8"> -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" charset="utf-8"/>  <title>Chaty Appy</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Lalezar&display=swap" rel="stylesheet">

firebase.database().ref().child("Chat").on("child_added", function (snapshot) {
if(snapshot.key!=(firebase.auth().currentUser.uid))
{

 var snapData =snapshot.val();
 var otherMessages = snapData.Messages.chatMessage;

 var innerHtml = document.querySelector(".chatCovoBox").innerHTML;
 innerHtml += "<div class=\"chatRow mb-2 text-left\"><div class=\"container myChatText text-right\"><span class=\"myName text-center\">زائر</span><br><span class=\"myText d-flex self-align-end\">"+otherMessages+"</span></div></div>";
   document.querySelector(".chatCovoBox").innerHTML = innerHtml;

   console.log(snapData.Messages.chatMessage);

   // firebase.database().ref().child("Chat").on("value", function (snapshot2){
   //   var newMessage = snapshot2.val();
   //   console.log(newMessage.);
   //
   // });
}
});
firebase.database().ref().child("Chat").on("child_changed", function(snapshot) {

  var changedPost = snapshot.val();

  if(snapshot.key==(firebase.auth().currentUser.uid))
  {
    var myMessages = changedPost.Messages.chatMessage;
    console.log(snapshot.key+" : "+myMessages);
  }
  else
  {
    var othersMessages = changedPost.Messages.chatMessage;
    console.log(snapshot.key+" : "+othersMessages);
  }

});


//START - To Keep the Scroll Pinned Down //
var messageBody = document.querySelector('.chatCovoBox');
messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
//END - To Keep the Scroll Pinned Down //

document.querySelector("#chatSendButton").addEventListener("click", function()
{
  const chatMessage = document.querySelector("#chatInputMessage").value;
  document.querySelector("#chatInputMessage").value ="";

  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" charset="utf-8"/>
  <!-- Bootstrap css & javascript links -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  <!-- CSS Style File -->
  <link rel="stylesheet" href="styles.css">

<<<<<<< HEAD
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

=======
</head>
  <body>
    <button id="logOutButton" type="button" class="d-flex ml-auto mr-2 mt-2 btn btn-warning" style="font-size: 25px; font-weight: 600" name="button">خروج</button>
    <img class="d-flex ml-auto mr-auto" src="chat.png" alt="">
    <h1 class="mt-1" align="center">شات تحديات برمجية</h1>

    <div class="container chatBox">
      <div class="container p-2 pt-4 chatCovoBox">

        <div class="chatRow text-right">
          <div class="container myChatText text-right">
            <span class="myName text-center">أنا</span><br>
            <span class="myText d-flex self-align-end">
              السلام عليكم ورحمة الله وبركاته....كيف الحال؟؟ هذي
                أول تجربة لي في البرنامج وان شاء الله تكون مو الأخيرة!! هههههه وعلى العموم الهدف من التجربة الأولى هو إصلاح الأخطاء
            </span>
          </div>
        </div>
        <div class="chatRow text-left">
          <div class="container othersChatText">
            <span class="senderName d-flex ">فلان</span><br>
            <span class="senderText d-flex self-align-end">السلام عليكم ورحمة الله وبركاته....كيف الحال؟؟ هذي
              أول تجربة لي في البرنامج وان شاء الله تكون مو الأخيرة!! هههههه وعلى العموم الهدف من التجربة الأولى هو إصلاح الأخطاء
            </span>
          </div>
        </div>
      </div>

      <form class="form-group inputForm text-center">
        <input class="" id="chatInputMessage" type="text" autocomplete="off">
      </form>
      <button id="chatSendButton" class="btn d-flex" type="button" name="button">إرسال</button>
    </div>
>>>>>>> 06c1ff5b0d1cfa7565d389d025e2c26bc5e4e691

    <script src="logout.js" type="text/javascript"></script>
    <script src="chat.js" type="text/javascript"></script>
    <script type="text/javascript">
      firebase.auth().onAuthStateChanged(function(user){
        if(!user)
        {
          window.location.href = "index.html";
        }
      });
    </script>
  </body>
</html>
