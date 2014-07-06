'use strict';

angular.module('weddingAppApp', [
  'ngAnimate',
  'ui.router'
])
.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('main', {
    url: '/',
    views: {
      '': {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      },
      'home@main': {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      },
      'about@main': {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      },
      'reception@main': {
        templateUrl: 'views/reception.html',
        controller: 'ReceptionCtrl'
      },
      'accommodations@main': {
        templateUrl: 'views/accommodations.html',
        controller: 'AccommodationsCtrl'
      },
      'transportation@main': {
        templateUrl: 'views/transportation.html',
        controller: 'TransportationCtrl'
      },
      'dresscode@main': {
        templateUrl: 'views/dresscode.html',
        controller: 'DresscodeCtrl'
      },
      'rsvp@main': {
        templateUrl: 'views/rsvp.html',
        controller: 'RsvpCtrl'
      },
      'checklist@main': {
        templateUrl: 'views/checklist.html',
        controller: 'ChecklistCtrl'
      },
    }
  });
});
