'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the myappApp
 */

// var APP = angular.module('myappApp');

// APP.akList = ['img/akCartel.png', 'img/akCaseHardened.png', 'img/akFireSerpent.png', 'img/akVulcan.png', 'img/akJetSet.png', 'img/akWastelandRebel.png'];
// APP.m4List = ['img/m4BulletRain.png', 'img/m4DesertStrike.png', 'img/m4DragonKing.png', 'img/m4Griffin.png', 'img/m4Howl.png', 'img/m4ModernHunter.png', 'img/m4Xray.png'];

APP.controller('HomeCtrl', function ($scope) {

	$scope.akList = [
		{
			name: 'Blue Tile',
			imageUrl: 'img/bluetile.png',
			url: '#/guns/BlueTile'
		},
		{
			name: 'Green Tile',
			imageUrl: 'img/greentile.png',
			url: '#/guns/GreenTile'
		},
		{
			name: 'Grey Tile',
			imageUrl: 'img/greytile.png',
			url: '#/guns/GreyTile'
		},
		{
			name: 'Pink Tile',
			imageUrl: 'img/pinktile.png',
			url: '#/guns/PinkTile'
		},
		{
			name: 'Red Tile',
			imageUrl: 'img/redtile.png',
			url: '#/guns/RedTile'
		},
		{
			name: 'Yellow Tile',
			imageUrl: 'img/yellowtile.png',
			url: '#/guns/YellowTile'
		}
	];


	console.log('akList length is ' + $scope.akList.length);
	// console.log('m4list length is ' + APP.m4List.length);	

	$scope.akList2 = [];

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

	var ranNums = shuffle([0,1,2,3,4,5]);

	console.log(ranNums);
	console.log('ranNums length is ' + ranNums.length);

	console.log('-- Printing a list of AK Images --');
	$scope.akList2 = getRandomImageList($scope.akList2, $scope.akList);
	$scope.akList = $scope.akList2;

	function getRandomImageList(shortList, longList){
		for(var i=0; i<ranNums.length; i++)
		{
			shortList.push(longList[ranNums[i]]);
			console.log(longList[ranNums[i]]);
		}
		return shortList;
	}

	$scope.imageClicked = function() {

		var ak = this.ak;
		APP.akSelected = ak;
		console.log('AK selected is ');
		console.log(APP.akSelected);
	}

	// $('#animateThis').addClass('animated wobble')
	angular.forEach($scope.akList2, function(gun) {
		angular.element(gun).hide();//.addClass('animated wobble');
	});

	// tile flip

	$scope.akSelected = APP.akSelected;

	$scope.flipped = false;
	// $scope.flipped1 = false;
	// $scope.flipped2 = false;
	// $scope.flipped3 = false;
	// $scope.flipped4 = false;
	// $scope.flipped5 = false;


	$scope.flip = function() {
		// $scope.flipped = !$scope.flipped;
		console.log('flipping');
		console.log($scope.flipped);
		$('#animateThis2').addClass('animated flip');
	}

	$scope.flip1 = function() {
		$scope.flipped1 = !$scope.flipped1;
		console.log('flipping1');
		console.log($scope.flipped1);
	}

	$scope.flip2 = function() {
		$scope.flipped2 = !$scope.flipped2;
		console.log('flipping2');
		console.log($scope.flipped2);
	}

	$scope.flip3 = function() {
		$scope.flipped3 = !$scope.flipped3;
		console.log('flipping3');
		console.log($scope.flipped3);
	}

	$scope.flip4 = function() {
		$scope.flipped4 = !$scope.flipped4;
		console.log('flipping4');
		console.log($scope.flipped4);
	}

	$scope.flip5 = function() {
		$scope.flipped5 = !$scope.flipped5;
		console.log('flipping5');
		console.log($scope.flipped5);
	}

});

APP.directive("flipper", function() {
	return {
		restrict: "E",
		template: "<div class='flipper' ng-transclude ng-class='{ flipped: flipped}'></div>",
		transclude: true,
		scope: {
			flipped: "="
		}
	};
});

APP.directive("front", function() {
	return {
		restrict: "E",
		template: "<div class='front tile' ng-transclude></div>",
		transclude: true
	};
});

APP.directive("back", function() {
	return {
		restrict: "E",
		template: "<div class='back tile' ng-transclude></div>",
		transclude: true
	}
});


