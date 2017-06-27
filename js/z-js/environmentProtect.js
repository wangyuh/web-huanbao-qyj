 angular.module('routingDemoApp',['ngRoute'])
            .config(['$routeProvider', function($routeProvider){
                $routeProvider
                .when('/all',{templateUrl:'policy.html'})
                .when('/policy',{templateUrl:'policy.html'})
                .when('/regulation',{templateUrl:'laws.html'})
                .when('/standard',{templateUrl:'criterion.html'})
                .when('/intelligence',{templateUrl:'aptitude.html'})
                .when('/paper',{templateUrl:'paper.html'})
                .otherwise({redirectTo:'/all'});
            }]);
            
$(function  () {
	
            
        $('.common-footer').load('commonFooter.html');
});
