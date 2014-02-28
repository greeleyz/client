angular.module('program', ['resources.program', 'ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/program', {
            templateUrl: 'program/program.tpl.html',
            controller: 'ProgramViewCtrl'
        });
    }])
.controller('ProgramViewCtrl', ['$scope', '$location', 'topics',
    function ($scope, $location, topics) {
        $scope.mayaname = "Maya";
        $scope.topics = topics;

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

        $scope.newsPageSize = 3;
        $scope.newsPage = 0;

        $scope.numberOfPages = function () {
            return Math.ceil($scope.topics.length / $scope.newsPageSize);
        };
    }
]);