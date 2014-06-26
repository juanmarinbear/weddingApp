'use strict';

angular.module('weddingAppApp')
.controller('MainCtrl', function ($scope) {

  $scope.views = {};
  $scope.views.active = 'about';

  $scope.state = {
    'about': {
      'prev': '',
      'next': 'reception'
    },
    'reception': {
      'prev': 'about',
      'next': 'accommodations'
    },
    'accommodations': {
      'prev': 'reception',
      'next': 'transportation'
    },
    'transportation': {
      'prev': 'accommodations',
      'next': 'dresscode'
    },
    'dresscode': {
      'prev': 'transportation',
      'next': 'rsvp'
    },
    'rsvp': {
      'prev': 'dresscode',
      'next': 'checklist'
    },
    'checklist': {
      'prev': 'rsvp',
      'next': ''
    }
  };

  $scope.views.about = true;
  $scope.views.reception = false;
  $scope.views.accommodations = false;
  $scope.views.transportation = false;
  $scope.views.dresscode = false;
  $scope.views.rsvp = false;
  $scope.views.checklist = false;

  $scope.next = function() {
    $scope.views[$scope.views.active] = false;
    $scope.views.active = $scope.state[$scope.views.active].next;
    $scope.views[$scope.views.active] = true;
  };

  $scope.prev = function() {
    $scope.views[$scope.views.active] = false;
    $scope.views.active = $scope.state[$scope.views.active].prev;
    $scope.views[$scope.views.active] = true;
  };
});
