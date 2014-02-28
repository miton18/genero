var App = angular.module('App', []);

App.controller('couleur', function($scope) {


	$(document).ready(function() {

	    $( "#tabs" ).tabs();
	    $( "#tabs" ).tabs( "option", "hide", { effect: "fold", duration: 300 } );
	    $( "#tabs" ).tabs( "option", "show", { effect: "fold", duration: 300 } );

	    $('.color').colpick({
			colorScheme:'dark',
			layout:'rgbhex',
			color:'ff8800',
			onSubmit:function(hsb,hex,rgb,el) {
				$(el).css('background-color', '#'+hex);
				$(el).val('#' + hex	);
				$(el).colpickHide();

					elem = $(el).attr('ng-model');
					switch(elem){
						case 'color':
							$scope.color = '#' + hex;
							break;
						case 'colord':
							$scope.colord = '#' + hex;
							break;
						case 'TOcolor':
							$scope.TOcolor = '#' + hex;
							break;
						case 'Tcolor':
							$scope.Tcolor = '#' + hex;
							break;
						case 'dcolor':
							$scope.dcolor = '#' + hex;
							break;
						case 'fcolor':
							$scope.fcolor = '#' + hex;
							break;

					}
					$scope.$apply();
			}
		})
			.css('background-color', '#ff8800');
	});
});


