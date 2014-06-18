angular
	.module('app', ['ui.router'])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('dashboard', {
				url: '/',
				templateUrl: 'partials/dashboard.html'
			})
			.state('album', {
				url: '/album/{id:[0-9]}',
				templateUrl: 'partials/album.html',
				controller: ['$scope', '$stateParams', function($scope, $stateParams) {
					var albumId = $stateParams.id;
					$scope.album = $scope.albums[albumId];
				}]
			})
			.state('albumImage', {
				url: '/album/{albumId}-{imageId}',
				templateUrl: 'partials/gallery.html',
				controller: ['$scope', '$stateParams', function($scope, $stateParams) {
					var albumId = $stateParams.albumId,
						imageId = $stateParams.imageId;

					$scope.album = $scope.albums[albumId];
					console.log($scope.album);
					$scope.image = $scope.album.images[imageId];
				}]
			})
	}])
