angular.module('app', ['ngRoute', 'program', 'thanks', 'filters.startFrom', 'templates.app', 'templates.common'])
.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {        
        $locationProvider.html5Mode(true);
        $routeProvider.otherwise({ redirectTo: '/program' });    
}]);