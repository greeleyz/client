describe('AppCtrl', function () {    
    
    beforeEach(module('app'));

    it('should create app module',
          inject(function ($rootScope, $route) {
              var scope = $rootScope.$new();
              expect(scope).toBeDefined();
              expect($route.routes['/program']).toBeDefined();
    }));
});