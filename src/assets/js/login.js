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