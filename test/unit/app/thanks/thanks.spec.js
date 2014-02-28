describe('ThanksViewCtrl', function () {
    var scope, rootScope, ctrl, location;
    
    beforeEach(function () {
        module('thanks');       
    });

    function runController() {       
        inject(function ($rootScope, $controller, $location) {
            location = $location;
            rootScope = $rootScope;
            scope = $rootScope.$new();
            ctrl = $controller('ThanksViewCtrl', { $scope: scope });                        
        });
    }
        
    it("should have a thank you ctrl", function () {
        runController();

        expect(ctrl).toBeDefined();        
    });
});