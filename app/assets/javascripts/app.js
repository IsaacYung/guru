//= require angular
//= require angular-material
//= require angular-animate
//= require angular-resource
//= require angular-aria.min
//= require angular-messages.min
//= require angular-route.min
//= require svg-assets-cache

angular.module('GuruApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])

  .controller('ButtonCtrl', function($scope) {
    $scope.title1 = 'Button';
    $scope.title4 = 'Warn';
    $scope.isDisabled = true;

    $scope.googleUrl = 'http://google.com';

  })

  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('orange')
      .accentPalette('orange')
      .dark();
  })

  .controller('NewGamerCtrl', function($mdDialog) {
    this.showPrompt = function() {
      var confirm = $mdDialog.prompt()
      .title('O Guru não sabe tudo, me conte')
      .textContent('Seu email não será mal usado')
      .placeholder('Seu nome')
      .ariaLabel('Seu nome')
      .ok('Jogar');

      $mdDialog.show(confirm);
    };
  });
