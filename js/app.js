var myAppx = angular.module('myApp',['ngMessages','ngResource']);

myAppx.controller('mainController', [
    '$scope', '$log', '$filter', '$resource', '$timeout',
    function($scope, $log, $filter, $resource, $timeout){
        console.log($scope);
    
        $scope.handle = '';

        $scope.lowercasehandle = function(){
            return $filter('lowercase')($scope.handle);
        };

        $scope.characters = 5;

        $scope.rules = [
            { rulename: "Must be 5 characters" },
            { rulename: "Must not be used elsewhere" },
            { rulename: "Must be cool" }
        ];


        $scope.$watch('handle', function(newValue, oldValue){

            console.info('Changed!');
            console.log('Old:' + oldValue);
            console.log('New:' + newValue);

        });

        // angularJs
        $timeout(function(){
            $scope.name = 'Everybody';
        }, 3000); // 3000 milliseconds - 3 seconds

        // pure javascript
        setTimeout(function(){
           
            // outside angularjs context
            $scope.handle = 'newtwitterhandle';
            console.log('Scope changed!');

            // do apply if:
            // using jquery, settimeout
            $scope.$apply(function(){
                $scope.handle = 'newtwitterhandle';
                console.log('Scope changed!');
            });

        }, 3000);

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