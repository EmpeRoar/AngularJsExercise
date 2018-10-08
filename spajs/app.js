var myAppx = angular.module('myAppx',['ngRoute']);

myAppx.config(function($routeProvider){
    $routeProvider.when('/', {
            templateUrl: 'pagex/main.html',
            controller: 'mainController'
        }).when('/second', {
            templateUrl: 'pagex/second.html',
            controller: 'secondController'
        })
});

myAppx.controller('mainController', ['$scope', '$log', function($scope, $log){

}]);

myAppx.controller('secondController', ['$scope','$log', function($scope, $log){

}]);


