angular.module('thanks', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/thanks', {
            templateUrl: 'thanks/thanks.tpl.html',
            controller: 'ThanksViewCtrl'
        });
    }])
.controller('ThanksViewCtrl', ['$scope', '$location',
    function ($scope, $location) {                
    }
]);