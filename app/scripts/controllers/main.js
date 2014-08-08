'use strict';

angular.module('weddingAppApp')
.controller('MainCtrl', function ($scope, $http, $sce) {
  $http.get('/views/main.txt.json')
    .then(function(res) {
      $scope.txt = res.data;
    });

  $scope.lang = 'en';
  $scope.page = {};
  $scope.page.first = true;
  $scope.page.last = false;

  var views, active, index;
  var viewContainer;

  $scope.$watch('$viewContentLoaded', function() {
    views = document.getElementsByClassName('view');
    index = 0;
    viewContainer = document.getElementById('view-container');
  });

  $scope.next = function() {
    var offset;
    $scope.page.first = false;
    index += 1;
    offset = index * 100;
    angular.element(viewContainer).css({top: '-' + offset + '%'});
    if(index >= views.length - 1) {
      $scope.page.last = true;
      return;
    }
  };

  $scope.prev = function() {
    var offset;
    $scope.page.last = false;
    index -= 1;
    offset = index * 100;
    angular.element(viewContainer).css({top: '-' + offset + '%'});
    if(index === 0) {
      $scope.page.first = true;
    }
  };

  $scope.trustHtml = function (txt) {
    return $sce.trustAsHtml(txt); 
  }
});
