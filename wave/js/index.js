//copyright 2004 LaoLin
;
var LaolinApp = angular.module('LaolinApp', ['cgNotify','ui.bootstrap','ngTouch','ngRoute','ui.chart']);

//A.1 通用数据
LaolinApp.data={};
LaolinApp.data.styles=['blue','green','red','yellow',
  'orange','pink','purple','lime','magenta','teal'];//,'white','black'

LaolinApp.config(function ($routeProvider) {
  partialsPath="partials/";
  $routeProvider
    .when('/index',
      {
        controller: 'waveFaqCtrl',
        templateUrl: partialsPath+'wave-faq.html'
      })
    .when('/wave-list',
      {
        controller: 'waveListCtrl',
        templateUrl: partialsPath+'wave-list.html'
      })      
    .when('/wave-faq',
      {
        controller: 'waveFaqCtrl',
        templateUrl: partialsPath+'wave-faq.html'
      })
      
    .when('/p2',
      {
        controller: 'MarketingCtrl',
        templateUrl: partialsPath+'p2.html'
      })
    .when('/zz',
      {
        controller: 'MarketingCtrl',
        templateUrl: partialsPath+'zz-todo.html'
      })
    .otherwise({ redirectTo: '/index' });
});

    
//C.0 AppCtrl controller
LaolinApp.controller('appCtrl', ['$scope', '$rootScope','serviceCommon',
    function ($scope, $rootScope,serviceCommon) {
  //DEBUG标记，正式页面应设为false
  $rootScope.appConfig=serviceCommon.appConfigObj();
  
  serviceCommon.appConfigSet('debug',false);
  serviceCommon.appConfigSet('pageTitle','首页');
  serviceCommon.appConfigSet('appName','LaoLin地震波助手');
  //$scope.initok=true;
}]);

//C.1 TopNavCtrl controller
LaolinApp.controller("TopNavCtrl", function ($scope,$location) {

  //导航菜单项目
  $scope.navs=[
    {text:'首页',link:'#/index'},
    {text:'地震波分析',link:'#/wave-list'}
  ];
  
  /*
  //导航菜单最右侧可下拉的项目（可选）
  $scope.navdropdowns={text:"使用说明"};
  $scope.navdropdowns.items=[
    {text:'如何加载地震波',link:'#index1'},
    {text:'如何计算时程反应',link:'#/index2'},
    {text:'如何计算反应谱',link:'#/index3'},
    {class:"divider"},
    {text:'关于下载数据',class:'dropdown-header'},
    {text:'关于下载数据的格式',link:'#/index4'},
    {text:'如何下载Excel格式的地震波',link:'#/index5'},
    {text:'如何下载Excel格式的反应谱',link:'#/index6'},
    {text:'如何下载AutoCAD格式的地震波',link:'#/index7'},
    {text:'如何下载AutoCAD格式的反应谱',link:'#/index8'}
  ];
  */
  
  $scope.isActive = function (path) {
    if ("#"+$location.path().substr(0, path.length-1) == path) {
      return true
    } else {
      return false;
    }
  }
});

//C.3 MarketingCtrl controller
LaolinApp.controller("MarketingCtrl", ['$scope','serviceCommon',
    function ($scope,serviceCommon) {
  var row1=[
    {width:4,imgSize:200,link:'#/about',img:'http://files.laolin.com/2013/structural-engineering/linjp-2012.9.3-180x180.jpg',title:'个人简历',text:'林建萍，高级工程师，国家一级注册结构工程师'},
    {width:4,imgSize:200,link:'#/about',img:'http://files.laolin.com/2013/development/20130715-development.jpg',title:'老林编程',text:'编程是老林的业余爱好。'},
    {width:4,imgSize:200,link:'#/about',img:'http://files.laolin.com/2013/laolin-family/20130525.laolin.family-200.jpg',title:'我爱我家',text:'欢欢喜喜龙凤胎、Anyi和老林。'}
   ];
  var row2=[
    {width:3,imgSize:150,link:'#/about',img:'http://files.laolin.com/2013/structural-engineering/21030715-structural.jpg',title:'Title -2-1-1',text:'test text 1 11 测试'},
    {width:3,imgSize:150,link:'#/about',img:'http://files.laolin.com/2013/structural-engineering/20130715-team.jpg',title:'Title -3-2-1',text:'test text 222222222222 测试'},
    {width:3,imgSize:150,link:'#/about',img:'http://files.laolin.com/2013/laolin-family/20130525.laolin.family-200.jpg',title:'Title -3-3-1',text:'3333333333test text 1 11 测试'},
    {width:3,imgSize:150,link:'#/about',img:'http://files.laolin.com/2013/structural-engineering/linjp-2012.9.3-180x180.jpg',title:'Ti4444444tle -2-4-1',text:'444444444test 测试text 测试 33333 测试'}
   ];
  $scope.rows=[row1,row2];
  
  serviceCommon.appConfigSet('pageTitle','test page 2');
}]);





console.log("ng laolin wave app init.");

