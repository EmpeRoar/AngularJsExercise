var myAppx = angular.module('myApp',['ngMessages','ngResource']);

myAppx.controller('mainController', [
    '$scope', '$log', '$filter', '$resource',
    function($scope, $log, $filter, $resource){
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
    
    }
]);

var searchPeople = function(firstName, lastName, age, occupation){
    return 'Jane Doe';
};


console.log(angular.injector().annotate(searchPeople));