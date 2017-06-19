

// instanciate one module to gorvern all the controllers
angular.module('Controllers', [])

	// control the navigations
	.controller('NavsController', ['$scope', function($scope) {

		$scope.navs = [
			{link: '#/today', text: 'Today', icon: 'icon-home'},
			{link: '#/previous', text: 'Previous', icon: 'icon-file-empty'},
			{link: '#/authors', text: 'Authors', icon: 'icon-pencil'},
			{link: '#/category', text: 'Category', icon: 'icon-menu'},
			{link: '#/settings', text: 'Settings', icon: 'icon-cog'}
			/*
			{link: '#/category', text: 'List', icon: 'icon-menu'},
			{link: '#/favourite', text: 'My Favourite', icon: 'icon-heart'},
			{link: '#/settings', text: 'Settings', icon: 'icon-cog'}

			*/
		];

	}])


	// today
	.controller('TodayController', ['$scope', '$http', '$filter', '$rootScope', function($scope, $http, $filter, $rootScope) {

		// get the time
		var today = $filter('date')(new Date, 'yyyy-MM-dd');

		$rootScope.title = 'Today';
		$rootScope.index = 0;
		$rootScope.loaded = false;

		$http({
			// solve the cross domain

			url: './api/today.php',
			method: 'get',
			params: {today: today}

		}).success(function(info) {
			console.log(info);

			$rootScope.loaded = true;

			// date data
			$scope.date =info.date;
			// article data
			$scope.posts = info.posts;
			
		});
	}])

	.controller('PreviousController', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {

		$rootScope.title = 'Previous';
		$rootScope.index = 1;
		$rootScope.loaded = false;

		$http({
			url: './api/previous.php',
			method: 'get'
		}).success(function(info) {
			console.log(info);

			$rootScope.loaded = true;

			$scope.date = info.date;
			$scope.posts = info.posts;

		});
	}])

	.controller('AuthorsController', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {

		$rootScope.index = 2;
		$rootScope.title = 'Authors';
		$rootScope.loaded = false;

		$http({
			url: './api/authors.php',
			method: 'get'
		}).success(function(info) {

			console.log(info);

			$rootScope.loaded = true;

			$scope.rec = info.rec;
			$scope.all = info.all;


		});
	}])

	.controller('CategoryController', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {

		$rootScope.index = 3;
		$rootScope.title = 'Category';
		$rootScope.loaded = false;

		$http({
			url: './api/category.php',
			method: 'get'
		}).success(function(info) {

			console.log(info);

			$rootScope.loaded = true;

			$scope.columns = info.columns;
		});
	}])

	.controller('SettingController', ['$scope', '$rootScope', function($scope, $rootScope) {

		$rootScope.index = 4;
		$rootScope.title = 'Settings';
		$rootScope.loaded = true;


	}]);




























