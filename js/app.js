var myAppx = angular.module('myApp',['ngMessages','ngResource','ngRoute']);

myAppx.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })
        .when('/second', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        }); 
});

myAppx.controller('secondController', ['$scope','$log', function($scope, $log){

}]);

myAppx.controller('mainController', [
    '$scope', '$log', '$filter', '$resource', '$timeout','$http', '$location',
    function($scope, $log, $filter, $resource, $timeout, $http, $location){
     
        console.log($location.path());

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

        $scope.clickButton = function(){
            alert('Clicker!');
            $scope.namex = "clickers";
        };

        // ---

        var request = new XMLHttpRequest();
    
        request.onreadystatechange = function(){

            $scope.$apply(function(){
                if(request.readyState == 4 && request.status == 200){
                    $scope.names = JSON.parse(request.responseText);
                }
            });
            
        }

        request.open("GET","http://localhost:58696/home/getter", true);
        request.send();


        // $http.get('http://localhost:58696/home/getter').success(function(result){
        //         $scope.names2 = result;
        //      }).error(function(data, status){
        //          console.log(data);
        //      });

        $http({
            method: 'GET',
            url: 'http://localhost:58696/home/getter'
        }).then(function successCallback(response) {
              // this callback will be called asynchronously
              // when the response is available              
              $scope.names2 = response.data;
        }, function errorCallback(response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
              console.log(response);
              $log.error(response);
        });

        $scope.newName = '';
        $scope.addName = function(){
           
            

        };

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