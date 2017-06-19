

	var App = angular.module('Moment', ['ngRoute', 'Controllers', 'Directives']);

	App.config(['$routeProvider',function($routeProvider) {
		
		$routeProvider
			.when('/today', {
				templateUrl: "./views/today.html",
				controller: 'TodayController'
			})
			.when('/previous', {
				templateUrl: './views/previous.html',
				controller: 'PreviousController'
			})
			.when('/authors', {
				templateUrl: './views/authors.html',
				controller: 'AuthorsController'
			})
			.when('/category', {
				templateUrl: './views/category.html',
				controller: 'CategoryController'
			})
			.when('/settings', {
				templateUrl: './views/settings.html',
				controller: 'SettingController'
			})
			.otherwise({
				rediectTo: '/today'
			});
			
	}]);

	App.run(['$rootScope', function($rootScope) {

		// setting the class initial value
		$rootScope.collapsed = false;

		// setting the global method
		$rootScope.toggle = function() {

			// change the initial value of 'collapsed'
			$rootScope.collapsed = !$rootScope.collapsed;

			// get all navigators
			var navs = document.querySelectorAll('.navs dd');

			if ($rootScope.collapsed) {

				console.log('open');

				for (var i = 0; i < navs.length; i++) {
					navs[i].style.transform = 'translate(0)';
					navs[i].style.transitionDelay = '0.2s';
					navs[i].style.transitionDuration = (i+1)*0.15 + 's';
				}

			} else {
				console.log('close');

				var len = navs.length - 1;
				for (var j = len; j > 0; j--) {
					navs[j].style.transform = 'translate(-100%)';
					navs[j].style.transitionDelay = '';
					navs[j].style.transitionDuration = (len - j) * 0.15 + 's';
				}
			}
		}
	}]);
































