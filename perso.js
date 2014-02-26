$(document).ready(function() {

    $( "#tabs" ).tabs();
    $( "#tabs" ).tabs( "option", "hide", { effect: "fold", duration: 1000 } );
    $( "#tabs" ).tabs( "option", "show", { effect: "fold", duration: 1000 } );
});