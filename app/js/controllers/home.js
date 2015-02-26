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

	$scope.tileListA = [
		{
			name: 'BlueTile',
			imageUrl: 'img/fontTiles-01.png',
			url: '#/fontImage/BlueTile'
		},
		{
			name: 'GreenTile',
			imageUrl: 'img/fontTiles-02.png',
			url: '#/fontImage/GreenTile'
		},
		{
			name: 'GreyTile',
			imageUrl: 'img/fontTiles-03.png',
			url: '#/fontImage/GreyTile'
		}
	];

	$scope.tileListB = [
		{
			name: 'PinkTile',
			imageUrl: 'img/fontTiles-04.png',
			url: '#/fontImage/PinkTile'
		},
		{
			name: 'RedTile',
			imageUrl: 'img/fontTiles-05.png',
			url: '#/fontImage/RedTile'
		},
		{
			name: 'YellowTile',
			imageUrl: 'img/fontTiles-06.png',
			url: '#/fontImage/YellowTile'
		}
	];


	console.log('tileListA length is ' + $scope.tileListA.length);
	console.log('tileListB length is ' + $scope.tileListB.length);

	// initializing the empty array
	$scope.tileList2 = [];
	$scope.tileList3 = [];

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

	// var ranNums = shuffle([0,1,2,3,4,5]);
	var ranNums = shuffle([0,1,2]);

	// end -- shuffling function

	console.log(ranNums);
	console.log('ranNums length is ' + ranNums.length);

	console.log('-- Printing a list of Tile Images --');
	// titleListA
	$scope.tileList2 = getRandomImageList($scope.tileList2, $scope.tileListA);
	$scope.tileListA = $scope.tileList2;
	// titleListB
	$scope.tileList3 = getRandomImageList($scope.tileList3, $scope.tileListB);
	$scope.tileListB = $scope.tileList3;



	function getRandomImageList(shortList, longList){
		for(var i=0; i<ranNums.length; i++)
		{
			shortList.push(longList[ranNums[i]]);
			console.log(longList[ranNums[i]]);
		}
		return shortList;
	}

	$scope.imageClicked = function() {

		// storing the tile that was clicked
		var tile = this.tile;
		APP.tileSelected = tile;

		// adding EXIT animation
		console.log('tile name is');
		console.log('#tile' + tile.name);
		$('#' + tile.name).addClass('animated flipOutY');

		console.log('Tile selected is ');
		console.log(APP.tileSelected);
		console.log('Tile selected URL is ' + tile.url)

		// routing to another page
		setTimeout(function() {
    		window.location = '#/fontImage';
    	}, 850);

	}


	// tile flip
	$scope.tileSelected = APP.tileSelected;
	$scope.flipped = false;


	$scope.flip = function() {
		// $scope.flipped = !$scope.flipped;
		console.log('flipping');
		console.log($scope.flipped);
		$('#animateThis2').addClass('animated flip');
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


