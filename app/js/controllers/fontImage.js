'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:FontImageCtrl
 * @description
 * # FontImageCtrl
 * Controller of the myappApp
 */

// var APP = angular.module('myappApp');

APP.controller('FontImageCtrl', function ($scope) {

	$scope.tileSelected = APP.tileSelected;

	$scope.clicked = false;

	$(imageFull2).css('color', $scope.tileSelected.color);
	$(imageFull2).css('background-color', $scope.tileSelected.color);

	$scope.clickImage = function () {
		$scope.clicked = !$scope.clicked;
	}

});

