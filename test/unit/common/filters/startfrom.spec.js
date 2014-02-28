describe('filters.startFrom', function () {
    
    beforeEach(function () {
        module('filters.startFrom');
    });
    
    function createList() {
        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    }

    it('has a startFrom filter', inject(function ($filter) {
        expect($filter('startFrom')).not.toBeNull();
    }));

    it('should start from length', inject(function ($filter) {
        var list = createList();
        expect($filter('startFrom')(list, 2).length === 8).toBeTruthy();
        expect($filter('startFrom')(list, 0).length === 10).toBeTruthy();        
    }));

    it('should throw error', inject(function ($filter) {
        var list = createList();
        expect($filter('startFrom')([], 2)).not.toBeNull();
    }));
});