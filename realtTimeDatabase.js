document.querySelector("#chatSendButton").addEventListener("click", function(){
  var chatRef = firebase.database().ref().child("Chat");
  var userID = firebase.auth().currentUser.uid;
  var userRef = chatRef.child(userID);

  var chatObject =
  {
    userName:"userName"
  }
}):
