'use strict';

/**
 * @ngdoc function
 * @name xApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the xApp
 */
angular.module('xApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
