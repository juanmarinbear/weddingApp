'use strict';

angular.module('weddingAppApp')
  .controller('ReceptionCtrl', function ($scope, $http) {
    $http.get('/views/reception.txt.json')
      .then(function(res) {
        $scope.txt = res.data;
      });
  });
