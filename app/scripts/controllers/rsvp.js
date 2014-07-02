'use strict';

angular.module('weddingAppApp')
.controller('RsvpCtrl', ['$scope', 'Geo', 'Parse', function ($scope, Geo, Parse) {
  $scope.data = {};
  $scope.geo = Geo;
  $scope.data.country = {};
  $scope.data.country.code = '';
  $scope.loading = false;
  $scope.submitted = false;
  $scope.error = {};
  $scope.hasError = false;

  $scope.submit = function() {
    $scope.loading = true;
    if($scope.rsvpForm.$valid) {
      var Rsvp = Parse.Object.extend('Rsvp');
      var rsvp = new Rsvp($scope.data);
      rsvp.set('country', $scope.data.country.name);
      rsvp.set('state', $scope.data.state.name);
      console.log(rsvp);
      rsvp.save(null, {
        success: function(rsvp) {
          $scope.loading = false;
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
      $scope.submitted = true;
    }
  }
}]);
