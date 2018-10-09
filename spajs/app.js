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

myAppx.service('nameService', function(){

    var self = this;
    this.name = 'John Doe';

    this.namelength = function(){

        return self.name.length;

    };

});

myAppx.controller('mainController', ['$scope', '$log', 'nameService',  function($scope, $log, nameService){
    
    $scope.name = nameService.name;

    $scope.$watch('name', function(){
        nameService.name = $scope.name;
    });

    $log.log(nameService.name);
    $log.log(nameService.namelength());
}]);

myAppx.controller('secondController', ['$scope','$log','$routeParams', 'nameService', function($scope, $log, $routeParams, nameService){
    $scope.num = $routeParams.num || 1;

    
    $scope.$watch('name', function(){
        nameService.name = $scope.name;
    });
    
    $scope.name = nameService.name;


}]);


