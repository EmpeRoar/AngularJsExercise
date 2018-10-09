var myAppx = angular.module('myAppx',['ngRoute']);

myAppx.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'pagedir/main.html',
            controller: 'mainController'
        })
        .when('/second', {
            templateUrl: 'pagedir/second.html',
            controller: 'secondController'
        })
        .when('/second/:num', {
            templateUrl: 'pagedir/second.html',
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
    
    $scope.person = {
        name: 'John Doe',
        address: '555 Main Str',
        city: 'New York',
        state: 'NY',
        Zip: '1111'
    };

    $scope.people = [
        {
            name: 'John Doe 1',
            address: '555 Main Str',
            city: 'New York',
            state: 'NY',
            Zip: '1111'
        },
        {
            name: 'John Doe 2',
            address: '555 Main Str',
            city: 'New York',
            state: 'NY',
            Zip: '1111'
        },
        {
            name: 'John Doe 3',
            address: '555 Main Str',
            city: 'New York',
            state: 'NY',
            Zip: '1111'
        }
    ];

    $scope.formattedAddress = function(person){
        return person.address + ', ' + person.city + ', ' + person.state + ', ' + person.Zip;
    };

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

myAppx.directive("searchResult", function(){
    return {
        templateUrl:'directives/searchresult.html',
        replace: true, // replaces the search-result html element in template
        restrict: 'E', // if presented as  A - attribute , E - element , AE - default setting, C - classname, M - for comments
        scope: {
            personName: "@", // @ = text, 
            personAddress: "@", // @ = text
            personObject: "=", // object
            formattedAddressFunction: "&" // this is a function
        }
    }
});


