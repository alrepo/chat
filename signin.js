document.querySelector("#signINButton").addEventListener("click",function()
{
  var email = document.querySelector("#signINemail").value;
  var password = document.querySelector("#signINpassword").value;

  if(email !="" && password !="")
  {
    firebase.auth().signInWithEmailAndPassword(email,password);
  }
  else
  {
    alert("Form is incomplete!");
  }

});
