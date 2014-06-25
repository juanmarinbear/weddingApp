'use strict';

angular.module('weddingAppApp', [
  'ngResource',
  'ui.router'
])
.config(function ($stateProvider, $urlRouterProvider) {
  //delete $httpProvider.defaults.headers.common['X-Requested-With'];
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('index', {
    url: '/',
    templateUrl: 'views/main.html',
    controller:'MainCtrl'
  })
  .state('/about', {
    url: '/about',
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl'
  })
  .state('/reception', {
    url: '/reception',
    templateUrl: 'views/reception.html',
    controller: 'ReceptionCtrl'
  })
  .state('/accommodations', {
    url: '/accommodations',
    templateUrl: 'views/accommodations.html',
    controller: 'AccommodationsCtrl'
  })
  .state('/dresscode', {
    url: '/dresscode',
    templateUrl: 'views/dresscode.html',
    controller: 'DresscodeCtrl'
  })
  .state('/transportation', {
    url: '/transportation',
    templateUrl: 'views/transportation.html',
    controller: 'TransportationCtrl'
  })
  .state('/rsvp', {
    url: '/rsvp',
    templateUrl: 'views/rsvp.html',
    controller: 'RsvpCtrl'
  })
  .state('/checklist', {
    url: '/checklist',
    templateUrl: 'views/checklist.html',
    controller: 'ChecklistCtrl'
  });
});
