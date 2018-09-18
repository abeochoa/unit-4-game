$(document).ready(function(){
    $(".instructions").click(function(){
        alert("The paragraph was clicked.");
    });
    $("p").click(function(){
        alert("The paragraph was clicked.");
    });
    $( "#gem1" ).click(function() {
        alert( "Handler for .click() called." );
    });
});