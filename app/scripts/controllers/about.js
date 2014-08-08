'use strict';

angular.module('weddingAppApp')
  .controller('AboutCtrl', function ($scope, $http) {
    $http.get('/views/about.txt.json')
      .then(function(res) {
        $scope.txt = res.data;
      });
  });
