var myAppx = angular.module('myApp',[]);

myAppx.controller('mainController', function($scope){
    console.log($scope);
});

var searchPeople = function(firstName, lastName, age, occupation){
    return 'Jane Doe';
};


console.log(angular.injector().annotate(searchPeople));