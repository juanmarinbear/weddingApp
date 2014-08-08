'use strict';

angular.module('weddingAppApp')
  .controller('TransportationCtrl', function ($scope, $http) {
    $http.get('/views/transportation.txt.json')
      .then(function(res) {
        $scope.txt = res.data;
      });
  });
