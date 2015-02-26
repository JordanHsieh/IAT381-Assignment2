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


});

$(document).ready(function() {
  $("#cf_onclick").click(function() {
  $("#cf2 img.top").toggleClass("transparent");
});
});