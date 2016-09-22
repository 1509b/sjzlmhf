angular.module("yeoman").controller("history",function($scope,$http){
    $http({
        url:"http://123.56.227.177:2504/sj-history",
        method:"get",
     	params:$scope.params
    }).success(function(e){
        //console.log(e)
		$scope.data = e;
    })
})
