'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('meanCommentorApp'));
  beforeEach(module('socketMock'));

  var MainCtrl, scope, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_) {
    scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });

    $httpBackend.expectGET('/api/comments').respond([{content : 'test', author : { name : 'admin'}},{content : 'test2',author : {name : 'admin'}}]);
  }));

  it('should expose newComent in the scop', function () {
    expect(scope.newComment).toBeDefined();
    expect(scope.editing).toEqual(false);
  });

  it('should get list of comments',function () {
    $httpBackend.flush(); 

    expect(scope.comments.length).toBe(2);
  });
});
