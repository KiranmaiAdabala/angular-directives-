'use strict';
	angular
	.module('parkingApp')
	.controller('parkingcntrl',function($scope){
		console.log('Called within controller : parkingCtrl');

		$scope.car = [
					{plate : '7E24HO8',
					url: 'views/ex1.html'},
					{plate : '7E24HO9',
				     url: 'ex2.html'},
					{plate : '7E24H10',
				      url: 'ex3.html'},
					{plate : '7E24H11'}
				];
		$scope.plate = $scope.car[3]

		$scope.save = function(vehicle){
			$scope.car.push(angular.copy(vehicle));
			delete $scope.vehicle;
		};
		$scope.myHTML="This is a ngBindHtml diective which is sanitized"
	});