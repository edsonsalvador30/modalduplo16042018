var app=function(){return angular.module("MyApp",["ionic","ui.router","ngResource","ngSanitize","custom.controllers","custom.services","datasourcejs","pascalprecht.translate","tmh.dynamicLocale","ui-notification","ngFileUpload"]).constant("LOCALES",{locales:{pt_br:"Portugues (Brasil)",en_us:"English"},preferredLocale:"pt_br"}).run(["$ionicPlatform",function(e){e.ready(function(){setTimeout(function(){navigator.splashscreen&&navigator.splashscreen.hide()},100),window.cordova&&window.cordova.plugins&&window.cordova.plugins.Keyboard&&(cordova.plugins.Keyboard.hideKeyboardAccessoryBar(!0),cordova.plugins.Keyboard.disableScroll(!0)),window.StatusBar&&StatusBar.styleDefault()})}]).config(["$httpProvider",function(e){var n=["$q","$rootScope",function(e,n){return{request:function(e){var n=JSON.parse(sessionStorage.getItem("_u"));return n&&n.token&&(e.headers["X-AUTH-TOKEN"]=n.token,window.uToken=n.token),e}}}];e.interceptors.push(n)}]).config(["$stateProvider","$urlRouterProvider","$ionicConfigProvider",function(e,n,o){o.navBar.alignTitle("center")}]).config(["$stateProvider","$urlRouterProvider","NotificationProvider",function(e,n,o){o.setOptions({delay:5e3,startTop:20,startRight:10,verticalSpacing:20,horizontalSpacing:20,positionX:"right",positionY:"top"}),e.state("login",{url:"",controller:"LoginController",templateUrl:"views/login.view.html"}).state("main",{url:"/",controller:"LoginController",templateUrl:"views/login.view.html"}).state("app",{url:"/app",controller:"HomeController",templateUrl:"views/logged/menu.view.html"}).state("app.home",{url:"/home",views:{menuContent:{controller:"HomeController",templateUrl:"views/logged/home.view.html"}}}).state("app.pages",{url:"/{name:.*}",views:{menuContent:{controller:"PageController",templateUrl:function(e){return"views/"+e.name+".view.html"}}}}).state("404",{url:"/error/404",controller:"PageController",templateUrl:function(e){return"views/error/404.view.html"}}).state("403",{url:"/error/403",controller:"PageController",templateUrl:function(e){return"views/error/403.view.html"}}),n.otherwise("/error/404")}]).config(["$translateProvider","tmhDynamicLocaleProvider",function(e,n){e.useMissingTranslationHandlerLog(),e.useStaticFilesLoader({prefix:"i18n/locale_",suffix:".json"}),e.registerAvailableLanguageKeys(["pt_br","en_us"],{"en*":"en_us","pt*":"pt_br","*":"pt_br"});var o=(window.navigator.userLanguage||window.navigator.language||"pt_br").replace("-","_");e.use(o.toLowerCase()),e.useSanitizeValueStrategy("escaped"),n.localeLocationPattern("plugins/angular-i18n/angular-locale_{{locale}}.js")}]).directive("crnValue",["$parse",function(e){return{restrict:"A",require:"^ngModel",link:function(n,o,r,t){var i;i=r.value?r.value:e(r.crnValue)(n),o.attr("data-evaluated",JSON.stringify(i)),o.bind("click",function(e){n.$apply(function(){t.$setViewValue(i)}.bind(o))})}}}]).decorator("$xhrFactory",["$delegate","$injector",function(e,n){return function(o,r){var t=e(o,r),i=n.get("$http"),a=i.pendingRequests[i.pendingRequests.length-1];return angular.isFunction(a.onProgress)&&t.upload.addEventListener("progress",a.onProgress),t}}]).controller("PageController",["$scope","$stateParams","Notification","$location","$http","$rootScope","$translate",function(e,n,o,r,t,i,a){app.registerEventsCronapi(e,a),i.http=t,e.Notification=o,e.params=n,e.$http=t;var l=r.search();for(var s in l)l.hasOwnProperty(s)&&(e.params[s]=l[s]);e.registerComponentScripts=function(){$(".carousel-indicators li").on("click",function(){var e="#"+$(this).parent().parent().parent().attr("id"),n=$(e+" .carousel-indicators li").index(this);$(e+" #carousel-example-generic").carousel(n)})},e.registerComponentScripts()}]).run(["$rootScope","$state",function(e,n){e.$on("$stateChangeError",function(){if(arguments.length>=6){var e=arguments[5];404!==e.status&&403!==e.status||n.go(e.status.toString())}else n.go("404")}),e.$on("$stateChangeSuccess",function(){setTimeout(function(){$($(".icon.ion-plus-round").parent()).off("click"),$($(".icon.ion-plus-round").parent()).on("click",function(){$("[required]").removeClass("input-validation-error"),$("input:invalid").removeClass("input-validation-error")}),$($(".icon.ion-checkmark").parent()).off("click"),$($(".icon.ion-checkmark").parent()).on("click",function(){$("[required].ng-invalid-required, [required].ng-invalid, [required].ng-empty").addClass("input-validation-error"),$("input:invalid").addClass("input-validation-error")}),$("input").off("keydown"),$("input").on("keydown",function(){$(this).removeClass("input-validation-error")})},300)})}])}(window);app.userEvents={},app.config={},app.config.datasourceApiVersion=2,app.config.defaultRoute="/app",app.bindScope=function(e,n){var o={};for(var r in n)"string"==typeof n[r]?o[r]=n[r]:"function"==typeof n[r]?o[r]=n[r].bind(e):o[r]=app.bindScope(e,n[r]);return o},app.registerEventsCronapi=function(e,n){for(var o in app.userEvents)e[o]=app.userEvents[o].bind(e);e.vars={};try{cronapi&&(e.cronapi=app.bindScope(e,cronapi),e.cronapi.$scope=e,e.safeApply=safeApply,n&&(e.cronapi.$translate=n))}catch(e){console.info("Not loaded cronapi functions"),console.info(e)}try{blockly&&(e.blockly=app.bindScope(e,blockly))}catch(e){console.info("Not loaded blockly functions"),console.info(e)}},window.safeApply=function(e){var n=this.$root.$$phase;"$apply"==n||"$digest"==n?e&&"function"==typeof e&&e():this.$apply(e)};