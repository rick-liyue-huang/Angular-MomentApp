
angular.module('Directives', [])

// self directive
.directive('loading', function () {
	return {
		restrict: 'A',
		replace: true,
		template: '<img src="" alt="" />'
	}
});