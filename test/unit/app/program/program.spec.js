describe('ProgramViewCtrl', function () {
    var scope, rootScope, ctrl, location;
    
    beforeEach(function () {
        module('program');       
    });

    function runController(topics) {       
        inject(function ($rootScope, $controller, $location) {
            location = $location;
            rootScope = $rootScope;
            scope = $rootScope.$new();
            ctrl = $controller('ProgramViewCtrl', { $scope: scope, topics: topics });                        
        });
    }
    
    function createMockTopicsList() {
        return [
                { name: "Attendance", lastupdated: new Date(), content: "this is some content", img: 'images/train.jpg' },
                { name: "Funwalk", lastupdated: new Date(), content: "this is some content for the funwalk", img: 'images/banner_logo3b.jpg' },
                { name: "Funwalk", lastupdated: new Date(), content: "this is some content for the funwalk", img: 'images/banner_logo3b.jpg' },
                { name: "Funwalk", lastupdated: new Date(), content: "this is some content for the funwalk", img: 'images/banner_logo3b.jpg' }
        ];
    }

    it("attaches the list of new topics to the scope", function () {
        var topics = createMockTopicsList();

        runController(topics);

        expect(scope.topics).toBe(topics);
        expect(scope.newsPageSize).toBe(3);
        expect(scope.newsPage).toBe(0);        
        expect(scope.numberOfPages()).toBe(Math.ceil(topics.length / scope.newsPageSize));
    });

    it("should be active", function () {
        var topics = createMockTopicsList();

        runController(topics);
        
        location.path('/program');
        rootScope.$apply();

        expect(location.path()).toBe('/program');
        expect(scope.isActive('/program')).toBe(true);
        expect(scope.isActive('/programx')).toBe(false);
    });
});