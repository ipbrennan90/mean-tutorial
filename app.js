var app = angular.module('whatchamacallit', []);

app.controller('MainCtrl', [
	'$scope',
	function($scope){
		$scope.test= 'Hello World';
		$scope.posts = [
			{title: 'post 1', upvotes: 5},
			{title: 'post 2', upvotes: 2},
			{title: 'post 3', upvotes: 15},
			{title: 'post 4', upvotes: 9},
			{title: 'post 5', upvotes: 4},
			{title: 'post 6', upvotes: 3},
		];

		$scope.addPost =  function() {
			if(!$scope.title || $scope.title === '') { return; }
			$scope.posts.push({title: $scope.title, upvotes: 0, link: $scope.link});
			$scope.title = '';
			$scope.link = '';
		};

		$scope.upvote = function(post) {
			post.upvotes += 1;
		};


	}
])
