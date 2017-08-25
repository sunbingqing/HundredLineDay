var userInfoModule = angular.module('userInfoModule', []);
userInfoModule.controller('userInfoCtrl', ['$scope', function($scope) {
    $scope.userInfo = {
        email: "22222222@qq.com",
        password: "123456",
        autoLogin: true
    }
}])