'use strict';

angular.module('weddingAppApp')
  .controller('DresscodeCtrl', function ($scope, $http) {
    $http.get('/views/dresscode.txt.json')
      .then(function(res) {
        $scope.txt = res.data;
      });
  });
