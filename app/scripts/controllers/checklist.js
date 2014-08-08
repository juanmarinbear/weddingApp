'use strict';

angular.module('weddingAppApp')
  .controller('ChecklistCtrl', function ($scope, $http) {
    $http.get('/views/checklist.txt.json')
      .then(function(res) {
        $scope.txt = res.data;
      });
  });
