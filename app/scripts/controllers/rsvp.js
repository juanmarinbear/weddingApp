'use strict';

angular.module('weddingAppApp')
.controller('RsvpCtrl', ['$scope', 'Geo', 'Parse', function ($scope, Geo, Parse) {
  $scope.data = {};
  $scope.geo = Geo;
  $scope.loading = false;
  $scope.submitted = false;
  $scope.success = false;
  $scope.error = {};
  $scope.hasError = false;

  $scope.submit = function() {

    $scope.loading = true;

    if($scope.rsvpForm.$valid) {
      console.log('Form valid!');
      var Rsvp = Parse.Object.extend('Rsvp');
      var rsvp = new Rsvp($scope.data);

      if($scope.data.rsvp === 'true') {
        rsvp.set('country', $scope.data.country.name);
        rsvp.set('state', $scope.data.state.name);
      }

      rsvp.save(null, {
        success: function(rsvp) {
          $scope.loading = false;
          $scope.success = true;
          $scope.$apply();
        },
        error: function(rsvp, error) {
          $scope.error.code = error.code;
          $scope.error.message = error.message.substring(0, 1).toUpperCase() + error.message.substring(1) + '.';
          $scope.hasError = true;
          $scope.submitted = true;
          $scope.loading = false;
          $scope.$apply();
        }
      });
    } else {
      console.log('Invalid form');
      $scope.loading = false;
      $scope.submitted = true;
    }
  }
}]);
