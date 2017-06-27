 angular.module('routingDemoApp',['ngRoute'])
            .config(['$routeProvider', function($routeProvider){
                $routeProvider
                .when('/all',{templateUrl:'fxInforFYGG.html'})
                .when('/fxInfor1',{templateUrl:'fxInforFYGG.html'})
                .when('/fxInfor2',{templateUrl:'fxInforFYPJ.html'})
                .when('/fxInfor3',{templateUrl:'fxInforSXR.html'})
                .when('/fxInfor4',{templateUrl:'fxInforBZXR.html'})
                .when('/fxInfor5',{templateUrl:'fxInforJYYC.html'})
                 .when('/fxInfor6',{templateUrl:'fxInforXZCF.html'})
                .otherwise({redirectTo:'/all'});
            }]);
$(function  () {
	
            
        $('.common-footer').load('commonFooter.html');
});