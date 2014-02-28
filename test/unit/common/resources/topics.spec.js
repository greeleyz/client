describe('resources.topics', function () {
    var topics;

    beforeEach(function () {
        module('resources.program');

        inject(function ($injector) {
            topics = $injector.get('topics');
        });
    });
    
    it('topics should return non-zero', function () {
        expect(topics).not.toBeNull();
        expect(topics.length > 0).toBeTruthy();
    });    
});