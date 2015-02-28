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

	$scope.imageList = ['img/photos/photo1.png', 'img/photos/photo2.png', 'img/photos/photo3.png', 'img/photos/photo4.png', 'img/photos/photo5.png'];

	// start -- shuffling function
	function shuffle(array) {
	    var i = array.length,
	        j = 0,
	        temp;

	    while (i--) {

	        j = Math.floor(Math.random() * (i+1));

	        // swap randomly chosen element with current element
	        temp = array[i];
	        array[i] = array[j];
	        array[j] = temp;
	    }
	    return array;
	}

	var ranNums = shuffle([0,1,2,3,4]);
	console.log(ranNums);
	var imageSelected = $scope.imageList[ranNums[0]];
	console.log(imageSelected);

	$(imageFull).css('background-image', 'url(' + imageSelected + ')');


	// getting selected tile
	$scope.tileSelected = APP.tileSelected;

	$scope.clicked = false;

	$(imageFull2).css('color', $scope.tileSelected.color);
	$(imageFull2).css('background-color', $scope.tileSelected.color);

	$scope.clickImage = function () {
		$scope.clicked = !$scope.clicked;
	}

});

