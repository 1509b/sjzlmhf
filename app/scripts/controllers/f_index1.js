 angular.module("yeoman").controller("f_index1",function($scope,$http){
            $http({
                url:"http://123.56.227.177:2504/sj-zhaopin",
                method:"GET",
                params:{classify:1}
            }).success(function(e){
                $scope.data=e
            })
})
 
 