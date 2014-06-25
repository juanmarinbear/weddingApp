'use strict';

angular.module('weddingAppApp', [
  'ngResource',
  'ui.router'
])
.config(function ($stateProvider, $urlRouterProvider) {
  //delete $httpProvider.defaults.headers.common['X-Requested-With'];
  $stateProvider
  .state('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl'
  })
  .state('/reception', {
    templateUrl: 'views/reception.html',
    controller: 'ReceptionCtrl'
  })
  .state('/accommodations', {
    templateUrl: 'views/accommodations.html',
    controller: 'AccommodationsCtrl'
  })
  .state('/dresscode', {
    templateUrl: 'views/dresscode.html',
    controller: 'DresscodeCtrl'
  })
  .state('/transportation', {
    templateUrl: 'views/transportation.html',
    controller: 'TransportationCtrl'
  })
  .state('/rsvp', {
    templateUrl: 'views/rsvp.html',
    controller: 'RsvpCtrl'
  })
  .state('/checklist', {
    templateUrl: 'views/checklist.html',
    controller: 'ChecklistCtrl'
  })
  .state('index', {
    url: '/',
    templateUrl: 'views/main.html',
    controller:'MainCtrl'
  });

  $urlRouterProvider.otherwise('/');
});
