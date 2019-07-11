document.addEventListener("DOMContentLoaded", event => {
    console.log('loaded');
});

function googleLogin() {
    console.log('test');
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)

        .then(result => {
            displayStatus(true, 'Welcome ' + result.user.displayName, 4000);
        })
        .catch(function(error) {
            displayStatus(false, error.message, 8000);
        });
}

function register(){

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(firebaseUser) {
        displayStatus(true, 'Welcome to the site ' + firebaseUser.user.email, 4000);
    })
    .catch(function(error) {
        displayStatus(false, error.message, 8000);
    });
}

function login(){

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(firebaseUser) {
        console.log(firebaseUser);
        displayStatus(true, 'Welcome ' + firebaseUser.user.email, 4000);
    })
    .catch(function(error) {
        displayStatus(false, error.message, 8000);
    });
  }

 function displayStatus(saveMessage, message, timeInMilliseconds)
 {
    $("#status").removeClass();
     var errorMessage = $("#status");
     if (saveMessage)
     {
         errorMessage.show();
         var myInterval = window.setInterval(function()
         {
             errorMessage.text(message);
             errorMessage.show();
             $("#status").addClass("alert-success");
             $
         }, 1000);
         window.setTimeout(function()
         {
             clearInterval(myInterval);
             errorMessage.hide();
             $("#status").removeClass("alert-success");
         }, timeInMilliseconds);
     }
     else
     {
         errorMessage.text(message);
         errorMessage.show();
         $("#status").addClass("alert-danger");
         window.setTimeout('$("#status").hide()', timeInMilliseconds);
     };
 };