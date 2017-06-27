 angular.module('routingDemoApp',['ngRoute'])
            .config(['$routeProvider', function($routeProvider){
                $routeProvider
                .when('/all',{templateUrl:'brand.html'})
                .when('/fxInfor1',{templateUrl:'brand.html'})
                .when('/fxInfor2',{templateUrl:'patent.html'})
                .when('/fxInfor3',{templateUrl:'copyright.html'})
                .when('/fxInfor4',{templateUrl:'softwareCopyright.html'})
                .otherwise({redirectTo:'/all'});
            }]);
            
            
$(function  () {     
        $('.common-footer').load('commonFooter.html');
});