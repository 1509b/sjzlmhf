angular.module('yeoman').controller("j-center",function($scope,$http){
	$http({
	        url:"http://123.56.227.177:2504/sj-commit",
	        method:"get",
	        parame:$scope.pearams
	    }).success(function(e){
	    	//console.log(e);
			$scope.data = e;
	    })
	})