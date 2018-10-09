var myAppx = angular.module('myAppx',['ngRoute']);

myAppx.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'pagex/main.html',
            controller: 'mainController'
        })
        .when('/second', {
            templateUrl: 'pagex/second.html',
            controller: 'secondController'
        })
        .when('/second/:num', {
            templateUrl: 'pagex/second.html',
            controller: 'secondController'
        })
});

myAppx.controller('mainController', ['$scope', '$log', function($scope, $log){

}]);

myAppx.controller('secondController', ['$scope','$log','$routeParams', function($scope, $log, $routeParams){
    $scope.num = $routeParams.num || 1;
}]);


