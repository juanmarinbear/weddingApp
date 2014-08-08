'use strict';

angular.module('weddingAppApp')
.controller('RsvpCtrl', ['$scope', '$http', 'Geo', 'Parse', function ($scope, $http, Geo, Parse) {
  $http.get('/views/rsvp.txt.json')
    .then(function(res) {
      $scope.txt = res.data;
    });

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
      $scope.loading = false;
      $scope.submitted = true;
    }
  }
}]);
