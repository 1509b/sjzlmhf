 angular.module("yeoman").controller("mxy",function($scope,$http){
    $http({
        url:"http://123.56.227.177:2504/sj-news",
        method:"get",
     	params:$scope.params
    }).success(function(e){
		$scope.data = e;
    })
})
 

