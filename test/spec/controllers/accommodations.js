'use strict';

describe('Controller: AccommodationsCtrl', function () {

  // load the controller's module
  beforeEach(module('weddingAppApp'));

  var AccommodationsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccommodationsCtrl = $controller('AccommodationsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
