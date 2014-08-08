'use strict';

angular.module('weddingAppApp')
  .controller('AccommodationsCtrl', function ($scope, $http) {
    $http.get('/views/accommodations.txt.json')
      .then(function(res) {
        $scope.txt = res.data;
      });
  });
