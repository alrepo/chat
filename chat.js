<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <!--    <meta name="viewport" content="width=device-width, initial-scale=1.0" charset="utf-8"> -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" charset="utf-8"/>  <title>Chaty Appy</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Lalezar&display=swap" rel="stylesheet">

  <!-- FIREBASE -->
  <!-- The core Firebase JS SDK is always required and must be listed first -->
  <script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js"></script>
  <!-- Other required Firebase links -->
  <script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-auth.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-database.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-storage.js"></script>
  <!-- TODO: Add SDKs for Firebase products that you want to use
       https://firebase.google.com/docs/web/setup#available-libraries -->
       <script type="text/javascript">
         // Your web app's Firebase configuration
         var firebaseConfig = {
           apiKey: "AIzaSyAxrkxRTB2BkVK4DkGwNnZpzcbU_yNbfqg",
           authDomain: "chat-9ed28.firebaseapp.com",
           databaseURL: "https://chat-9ed28.firebaseio.com",
           projectId: "chat-9ed28",
           storageBucket: "chat-9ed28.appspot.com",
           messagingSenderId: "983396552183",
           appId: "1:983396552183:web:81dbec8e63462a511272f2"
         };
         // Initialize Firebase
         firebase.initializeApp(firebaseConfig);
       </script>

  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" charset="utf-8"/>
  <!-- Bootstrap css & javascript links -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  <!-- CSS Style File -->
  <link rel="stylesheet" href="styles.css">

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
