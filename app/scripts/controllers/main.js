'use strict';

angular.module('weddingAppApp')
.controller('MainCtrl', function ($scope) {
  var views, active, index;
  var viewContainer;

  $scope.$watch('$viewContentLoaded', function() {
    views = document.getElementsByClassName('view');
    index = 0;
    viewContainer = document.getElementById('view-container');
  });

  $scope.next = function() {
    var offset;
    if(index >= views.length - 1) {
      return;
    }
    index += 1;
    offset = index * 100;
    angular.element(viewContainer).css({top: '-' + offset + '%'});
  };

  $scope.prev = function() {
    var offset;
    if(index === 0) {
      return;
    }
    index -= 1;
    offset = index * 100;
    angular.element(viewContainer).css({top: '-' + offset + '%'});
  };
});
