'use strict';

/**
 * @ngdoc overview
 * @name yeomanApp
 * @description
 * # yeomanApp
 *
 * Main module of the application.
 */
//var timestamp = (new Date()).valueOf();
//alert(timestamp);
//var sj=document.getElementById('sj');
//sj.value=timestamp;
angular.module('yeoman').controller("os",function($scope,$http){
	$scope.ud={}
	$scope.time=new Date();
    $scope.year=$scope.time.getFullYear();   //获取年
    $scope.month=$scope.time.getMonth()+1;    //获取月
    $scope.data2=$scope.time.getDate();       //获取日
    $scope.hour=$scope.time.getHours();       //获取时
    $scope.minutes=$scope.time.getMinutes();  //获取分
    $scope.order_time=$scope.year+'年'+$scope.month+'月'+$scope.data2+'日'+$scope.hour+'时'+$scope.minutes+'分';
	//$scope.ud.date = (new Date()).valueOf()
	$scope.ud.date=$scope.order_time
	$scope.submit=function() {
        $http({
            url: "http://123.56.227.177:2504/sj-commit",
            method: "POST",
            data: $scope.ud
        }).success(function (e) {
        	$scope.data=e;
            alert("评论成功!")
        }).error(function(e){
            alert("请求失败！")
        })
    }
})

