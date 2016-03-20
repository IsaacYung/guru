//= require angular
//= require angular-material
//= require angular-animate
//= require angular-resource


(function () {
  var app = angular.module('MyApps',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])

  .controller('AppCtrl', function($scope) {
    $scope.title1 = 'Button';
    $scope.title4 = 'Warn';
    $scope.isDisabled = true;

    $scope.googleUrl = 'http://google.com';

  })
})();
