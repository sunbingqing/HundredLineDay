//-----创建自定义指令 
// var app = angular.module('myApp',[]);
// app.directive('selfDirective',function(){
//     return {
//         restrict:"E", //默认是EA，即元素和属性，另外还有C类名，M注释
//         template:"<h1>自定义指令！</h1>"
//     }
// });

//-----ng-model指令
// var app2 = angular.module('myApp2',[]);
// app2.controller('myCtrl',function($scope){
//     $scope.name='hahah';
// })

//-----双向绑定
// var app3 = angular.module('myApp3',[]);
// app3.controller('myCtrl1',function($scope){
//     $scope.name="hulala";
// })

//-----scope作用域
// var app4 = angular.module('myApp4',[]);
// app4.controller('myCtrl2',function($scope){
//     $scope.name = 'lili';
// })

//-----scope概述mvc
// var app5 = angular.module('myApp5',[]);
// app5.controller('myCtrl3',function($scope){
//     $scope.name = '花花';
//     $scope.sayHello = function(){
//         $scope.greeting = 'Hello' + $scope.name + '!';
//     }
// })

//-----scope作用范围
// var app6 = angular.module('myApp6',[]);
// app6.controller('myCtrl4',function($scope){
//     $scope.name = ['haha','lele','hehe'];
// })

//-----根作用域
// var app7 = angular.module('myApp7',[]);
// app7.controller('myCtrl5',function($scope,$rootScope){
//     $scope.names = ['花花','乐乐','怕怕'];
//     $rootScope.firstName = '陈';
// });
// app7.controller('myCtrl6',function($scope,$rootScope){
//     $scope.firstName = $rootScope.firstName;
// });

//-----AngularJS控制器
// var app8 = angular.module('myApp8',[]);
// app8.controller('myCtrl7',function($scope){
//     $scope.name = '小强';
//     $scope.firstName = '陈';
// })

//-----控制器方法 + 表达式中添加过滤器
// var app9 = angular.module('myApp9',[]);
// app9.controller('myCtrl8',function($scope){
//     $scope.name = 'gaga';
//     $scope.firstName = 'lady';
//     $scope.fullName = function() {
//         return $scope.firstName + $scope.name;
//     }
// })

//-----$location服务
// var app10 = angular.module('myApp10',[]);
// app10.controller('myCtrl9',function($scope,$location){
//     $scope.myUrl=$location.absUrl();
// })

//-----$http服务
// var app11 = angular.module('myApp11',[]);
// app11.controller('myCtrl10',function($scope,$http){
//     $http.get("welcom.htm").then(function(response){
//         $scope.myWelcome = response.data;
//     })
// })

//-----过滤器中使用自定义服务
// var app12 = angular.module('myApp12',[]);

// app12.service('hexafy',function(){
//     this.myFunc = function(x){
//         return x.toString(16);
//     }
// })
// app12.filter('myFormat',['hexafy',function(hexafy){
//     return function(x){
//         return hexafy.myFunc(x);
//     }
// }])
// app12.controller('myCtrl11',function($scope){
//     $scope.counts = [255,232,222];
// })

//-----$timeout服务
// var app13 = angular.module('myApp13',[]);
// app13.controller('myCtrl12',function($scope,$timeout){
//     $scope.myHeader = 'hello xixi';
//     $timeout(function(){
//         $scope.myHeader = 'hi linda';
//     },2000)
// })

//-----$interval服务
// var app14 = angular.module('myApp14',[]);
// app14.controller('myCtrl13',function($scope,$interval){
//     $scope.theTime = new Date().toLocaleTimeString();
//     $interval(function(){
//         $scope.theTime = new Date().toLocaleTimeString();
//     },1000)
// })

//-----创建自定义服务
// var app15 = angular.module('myApp15',[]);
// app15.service('hexa',function(){
//     this.myFunc = function(x){
//         return x.toString(16);
//     }
// })
// app15.controller('myCtrl14',function($scope,hexa){
//     $scope.hex = hexa.myFunc(222);
// })

//-----在过滤器中使用服务
// var app16 = angular.module('myApp16',[]);
// app16.service('hexa',function(){
//     this.myFunc = function(x){
//         return x.toString(16);
//     }
// })
// app16.filter('myFormat',['hexa',function(hexa){
//     return function(x){
//         return hexa.myFunc(x);
//     }
// }])

//-----$http实例
// var app17 = angular.module('myApp17',[]);
//---通用方法
// app17.controller('myCtrl15',function($scope,$http){
//     $http({
//         method:'GET',
//         url:'http://www.easy-mock.com/mock/59780a36a1d30433d83db81b/HundredLineDay/HundredLineDay'
//     }).then(function successCellback(response){
//         $scope.names = response.data.data;
//     },function errorCallback(response){

//     })
// })
//---简写方法
// app17.controller('myCtrl15',function($scope,$http){
//     $http.get("http://www.easy-mock.com/mock/59780a36a1d30433d83db81b/HundredLineDay/HundredLineDay")
//     .then(function(response){$scope.names = response.data.data;})
// })

//-----使用ng-options创建选择框
// var app18 = angular.module('myApp18',[]);
// app18.controller('myCtrl16',function($scope){
//     $scope.sites = [
//         {site : "Google", url : "http://www.google.com"},
// 	    {site : "Runoob", url : "http://www.runoob.com"},
// 	    {site : "Taobao", url : "http://www.taobao.com"}
//     ]
// })

//-----使用ng-repeat创建选择框
// var app19 = angular.module('myApp19',[]);
// app19.controller('myCtrl17',function($scope){
//     $scope.sites = [
//         {site : "Google", url : "http://www.google.com"},
// 	    {site : "Runoob", url : "http://www.runoob.com"},
// 	    {site : "Taobao", url : "http://www.taobao.com"}
//     ]
// })

//-----数据源为对象--ng-option
// var app20 = angular.module('myApp20',[]);
// app20.controller('myCtrl18',function($scope){
//     $scope.cars={
//         car01 : {brand : "Ford", model : "Mustang", color : "red"},
//         car02 : {brand : "Fiat", model : "500", color : "white"},
//         car03 : {brand : "Volvo", model : "XC90", color : "black"}
//     }
// })

//-----在表格中使用数据
// var app21 = angular.module('myApp21',[]);
// app21.controller('myCtrl19',function($scope,$http){
//     $http.get("http://www.easy-mock.com/mock/59780a36a1d30433d83db81b/HundredLineDay/Customers")
//     .then(function (result){
//         $scope.names = result.data.data;
//     })
// })

//-----ng-click指令
// var app22 = angular.module('myApp22',[]);
// app22.controller('myCtrl20',function($scope){
//     $scope.count = 1;
// })

//-----隐藏HTML元素
// var app23 = angular.module('myApp23',[]);
// app23.controller('myCtrl21',function($scope){
//     $scope.firstName = '陈';
//     $scope.lastName = '猪猪';
//     $scope.name = function(){
//         return $scope.firstName + $scope.lastName;
//     }
//      $scope.myVar = false;
//     $scope.toggle = function(){
//        $scope.myVar = !$scope.myVar
//     }
// })

//-----AngularJS表单实例
// var app24 = angular.module('myApp24',[]);
// app24.controller('myCtrl22',function($scope){
//     $scope.master = {firstName:'hah',lastName:'kiki'};
//     $scope.reset = function(){
//         $scope.user = angular.copy($scope.master);
//     }
//     $scope.reset();
// })

//-----AngularJS输入验证
// var app25 = angular.module('myApp25',[]);
// app25.controller('myCtrl23',function($scope){
//     $scope.user = 'hh';
//     $scope.email = '1223@ss.com';
// })

//angular.lowercase()
// var app26 = angular.module('myApp26',[]);
// app26.controller('myCtrl24',function($scope){
//     $scope.x = 'JSON';
//     $scope.y = angular.lowercase($scope.x);
// })

//AngularJS bootstrap
var app27 = angular.module('myApp27',[]);
app27.controller('myCtrl25',function($scope){
    // $scope.fName = '';
    // $scope.lName = '';
    $scope.user=[
        {id:1,fName:'陈',lName:'^(*￣(oo)￣)^'},
        {id:2,fName:'陈',lName:'大'},
        {id:3,fName:'陈',lName:'二'},
        {id:4,fName:'陈',lName:'三'},
        {id:5,fName:'陈',lName:'十'},
        {id:6,fName:'陈',lName:'哈哈'}
    ]
})