$(document).ready(function() {

    $( "#tabs" ).tabs();
    $( "#tabs" ).tabs( "option", "hide", { effect: "fold", duration: 300 } );
    $( "#tabs" ).tabs( "option", "show", { effect: "fold", duration: 300 } );

    $(".color").spectrum({
   	 color: "#f00"
	});
});