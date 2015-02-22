'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the myappApp
 */

var APP = angular.module('myappApp');

APP.akList = ['img/akCartel.png', 'img/akCaseHardened.png', 'img/akFireSerpent.png', 'img/akVulcan.png', 'img/akJetSet.png', 'img/akWastelandRebel.png'];
APP.m4List = ['img/m4BulletRain.png', 'img/m4DesertStrike.png', 'img/m4DragonKing.png', 'img/m4Griffin.png', 'img/m4Howl.png', 'img/m4ModernHunter.png', 'img/m4Xray.png'];

APP.controller('TestCtrl', function ($scope) {

	console.log('akList length is ' + APP.akList.length);
	console.log('m4list length is ' + APP.m4List.length);	

	$scope.akList2 = [];
	$scope.m4List2 = [];

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
	$scope.akList2 = getRandomImageList($scope.akList2, APP.akList);
	APP.akList = $scope.akList2;
	console.log('-- Printing a list of M4 Images --');
	$scope.m4List2 = getRandomImageList($scope.m4List2, APP.m4List);
	APP.m4List = $scope.m4List2;

	function getRandomImageList(shortList, longList){
		for(var i=0; i<ranNums.length; i++)
		{
			shortList.push(longList[ranNums[i]]);
			console.log(longList[ranNums[i]]);
		}
		return shortList;
	}


});


