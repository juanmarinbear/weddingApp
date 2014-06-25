'use strict';

describe('Controller: DresscodeCtrl', function () {

  // load the controller's module
  beforeEach(module('weddingAppApp'));

  var DresscodeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DresscodeCtrl = $controller('DresscodeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
