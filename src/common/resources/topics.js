angular.module('resources.program', []);
angular.module('resources.program').factory('topics', [function () {
    var topics = [
    { name: "Attendance", lastupdated: new Date(), content: "this is some content", img: 'images/train.jpg' },
    { name: "Funwalk", lastupdated: new Date(), content: "this is some content for the funwalk", img: 'images/banner_logo3b.jpg' },
    { name: "Playground", lastupdated: new Date(), content: "this is some content for the funwalk", img: 'images/thankyou.jpg' },
    { name: "Playground", lastupdated: new Date(), content: "this is some content for the funwalk", img: 'images/thankyou.jpg' },
    { name: "Playground", lastupdated: new Date(), content: "this is some content for the funwalk", img: 'images/thankyou.jpg' },
    { name: "Playground", lastupdated: new Date(), content: "this is some content for the funwalk", img: 'images/thankyou.jpg' }
    ];
    return topics;
}]);

