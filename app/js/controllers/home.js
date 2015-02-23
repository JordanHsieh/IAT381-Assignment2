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
			name: 'Cartel',
			imageUrl: 'img/akCartel.png',
			url: '#/guns/Cartel'
		},
		{
			name: 'Case Hardened',
			imageUrl: 'img/akCaseHardened.png',
			url: '#/guns/CaseHardened'
		},
		{
			name: 'Fire Serpent',
			imageUrl: 'img/akFireSerpent.png',
			url: '#/guns/FireSerpent'
		},
		{
			name: 'Vulcan',
			imageUrl: 'img/akVulcan.png',
			url: '#/guns/Vulcan'
		},
		{
			name: 'Jet Set',
			imageUrl: 'img/akJetSet.png',
			url: '#/guns/JetSet'
		},
		{
			name: 'Wasteland Rebel',
			imageUrl: 'img/akWastelandRebel.png',
			url: '#/guns/WastelandRebel'
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

});


