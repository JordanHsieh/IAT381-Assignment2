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

	$scope.clicked = true;

	$scope.clickImage = function () {
		$scope.clicked = !$scope.clicked;
	}

});

