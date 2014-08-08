'use strict';

angular.module('weddingAppApp')
.controller('HomeCtrl', function ($scope, $http) {
  $http.get('/views/home.txt.json')
    .then(function(res) {
      $scope.txt = res.data;
    });
});
