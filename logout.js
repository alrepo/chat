document.querySelector("#logOutButton").addEventListener("click", function(){
  var result = firebase.auth().signOut();
  result.catch(error)
  {
    alert("Error!");
  };
});
