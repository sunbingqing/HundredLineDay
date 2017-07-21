//创建自定义指令 
var app = angular.module('myApp',[]);
app.directive('selfDirective',function(){
    return {
        restrict:"E", //默认是EA，即元素和属性，另外还有C类名，M注释
        template:"<h1>自定义指令！</h1>"
    }
});

//ng-model指令
var app2 = angular.module('myApp2',[]);
app2.controller('myCtrl',function($scope){
    $scope.name='hahah';
})

//双向绑定
var app3 = angular.module('myApp3',[]);
app3.controller('myCtrl1',function($scope){
    $scope.name="hulala";
})

//scope作用域
var app4 = angular.module('myApp4',[]);
app4.controller('myCtrl2',function($scope){
    $scope.name = 'lili';
})

//scope概述mvc
var app5 = angular.module('myApp5',[]);
app5.controller('myCtrl3',function($scope){
    $scope.name = '花花';
    $scope.sayHello = function(){
        $scope.greeting = 'Hello' + $scope.name + '!';
    }
})

//scope作用范围
var app6 = angular.module('myApp6',[]);
app6.controller('myCtrl4',function($scope){
    $scope.name = ['haha','lele','hehe'];
})

//根作用域
var app7 = angular.module('myApp7',[]);
app7.controller('myCtrl5',function($scope,$rootScope){
    $scope.names = ['花花','乐乐','怕怕'];
    $rootScope.firstName = '陈';
});
app7.controller('myCtrl6',function($scope,$rootScope){
    $scope.firstName = $rootScope.firstName;
});

//AngularJS控制器
var app8 = angular.module('myApp8',[]);
app8.controller('myCtrl7',function($scope){
    $scope.name = '小强';
    $scope.firstName = '陈';
})

//控制器方法 + 表达式中添加过滤器
var app9 = angular.module('myApp9',[]);
app9.controller('myCtrl8',function($scope){
    $scope.name = 'gaga';
    $scope.firstName = 'lady';
    $scope.fullName = function() {
        return $scope.firstName + $scope.name;
    }
})

