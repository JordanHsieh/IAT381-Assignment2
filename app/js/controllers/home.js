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
			fontName: 'Roboto',
			cssName:'font-roboto',
			color: '#00a651',
			imageUrl: 'img/fontTiles/roboto.png',
		
		},
		{
			fontName: 'EB Garamond',
			cssName:'font-eb-garamond',
			color: '#00aeef',
			imageUrl: 'img/fontTiles/garamond.png',
		
		},
		{
			fontName: 'Slabo',
			cssName:'font-slabo',
			color: '#2e3192',
			imageUrl: 'img/fontTiles/slabo.png',
		
		},
		{
			fontName: 'Oswald',
			cssName:'font-oswald',
			color: '#ec008c',
			imageUrl: 'img/fontTiles/oswald.png',
		
		},
		{
			fontName: 'Lora',
			cssName:'font-lora',
			color: '#8dc63f',
			imageUrl: 'img/fontTiles/lora.png',
		
		},
		{
			fontName: 'Dancing Script',
			cssName:'font-dancing-script',
			color: '#f7941e',
			imageUrl: 'img/fontTiles/dancing-script.png',
		
		}
	];

	$scope.tileListB = [
		{
			fontName: 'Arvo',
			cssName:'font-arvo',
			color: '#f15a29',
			imageUrl: 'img/fontTiles/arvo.png',
		
		},
		{
			fontName: 'Lobster',
			cssName:'font-lobster',
			color: '#be1e2d',
			imageUrl: 'img/fontTiles/lobster.png',
		
		},
		{
			fontName: 'Open Sans',
			cssName:'font-open-sans',
			color: '#262262',
			imageUrl: 'img/fontTiles/open-sans.png',
		
		},
		{
			fontName: 'Raleway',
			cssName:'font-raleway',
			color: '#662d91',
			imageUrl: 'img/fontTiles/raleway.png',
		
		},
		{
			fontName: 'Sail',
			cssName:'font-sail',
			color: '#92278f',
			imageUrl: 'img/fontTiles/sail.png',
		
		},
		{
			fontName: 'Quicksand',
			cssName:'font-quicksand',
			color: '#9e1f63',
			imageUrl: 'img/fontTiles/quicksand.png',

		}
	];


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
	var ranNums = shuffle([0,1,2,3,4,5]);

	// end -- shuffling function

	console.log('-- Printing a list of Tile Images --');
	// titleListA
	$scope.tileList2 = getRandomImageList($scope.tileList2, $scope.tileListA);
	$scope.tileListA = $scope.tileList2;
	// titleListB
	$scope.tileList3 = getRandomImageList($scope.tileList3, $scope.tileListB);
	$scope.tileListB = $scope.tileList3;



	function getRandomImageList(shortList, longList){
		for(var i=0; i<3; i++)
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
		console.log('#tile' + tile.fontName);
		$('#' + tile.fontName).addClass('animated flipOutY');

		console.log('Tile selected is ');
		console.log(APP.tileSelected);
		console.log('Tile selected URL is ' + tile.imageUrl)

		// routing to another page
		setTimeout(function() {
    		window.location = '#/fontImage';
    	}, 850);

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


