angular.module('myApp', [])
    .controller('signUpControl', ['$scope', function($scope) {
        $scope.userData = {
            name: '',
            password: '',
            password2: ''
        }
        $scope.submitFunc = function() {
            console.log($scope.userData);
        }
    }])