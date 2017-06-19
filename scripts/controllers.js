

// instanciate one module to gorvern all the controllers
angular.module('Controllers', [])

	.controller('Demo', ['$scope', function($scope) {
		console.log('demo');
	}]);