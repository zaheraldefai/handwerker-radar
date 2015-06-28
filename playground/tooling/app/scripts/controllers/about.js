'use strict';

/**
 * @ngdoc function
 * @name xApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the xApp
 */
angular.module('xApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
