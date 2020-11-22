

document.querySelector("#signupButton").addEventListener("click", function(){
  var email = document.querySelector("#email").value;
  var password1 = document.querySelector("#password1").value;

    if(email != "" && password1 != "")
    {
        var result = firebase.auth().createUserWithEmailAndPassword(email,password1);
        rersult.catch(error)
        {
            alert("Error!");
        };
    }
    else
    {
        alert("Please complete the form!");
    }
});
