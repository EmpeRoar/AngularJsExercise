var myAppx = angular.module('myApp',['ngMessages','ngResource']);

myAppx.controller('mainController', [
    '$scope', '$log', '$filter', '$resource', '$timeout',
    function($scope, $log, $filter, $resource, $timeout){
        console.log($scope);
    
        $log.log("Hello");
        $log.info("This is some information");
        $log.warn("Warning!");
        $log.debug("Some debug information");
        $log.error("This is an error!");
    
        $scope.name = 'John';
        $scope.formattedname = $filter('uppercase')($scope.name);
        $log.info($scope.name);
        $log.info($scope.formattedname);
    
        console.log($resource);

        $timeout(function(){

            $scope.name = 'Everybody';

        }, 3000); // 3000 milliseconds - 3 seconds
        
    
    }
]);

var searchPeople = function(firstName, lastName, age, occupation){
    return 'Jane Doe';
};


console.log(angular.injector().annotate(searchPeople));