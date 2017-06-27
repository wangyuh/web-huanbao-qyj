 angular.module('routingDemoApp',['ngRoute'])
            .config(['$routeProvider', function($routeProvider){
                $routeProvider
                .when('/all',{templateUrl:'attract.html'})
                .when('/attract1',{templateUrl:'attract.html'})
                .when('/attract2',{templateUrl:'attract1.html'})
                .when('/attract3',{templateUrl:'attract2.html'})
                .when('/attract4',{templateUrl:'attract3.html'})
                .when('/attract5',{templateUrl:'attract4.html'})
                .otherwise({redirectTo:'/all'});
            }]);
  
$(function  () {     
        $('.common-footer').load('commonFooter.html');
});