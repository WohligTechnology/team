// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.teamdetail', {
        url: '/team/detail',
        views: {
            'menuContent': {
                templateUrl: 'templates/teamdetail.html',
                controller: 'TeamDetailCtrl'
            }
        }
    })

    .state('app.team', {
        url: '/team',
        views: {
            'menuContent': {
                templateUrl: 'templates/team.html',
                controller: 'TeamCtrl'
            }
        }
    })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/team');
});


//.directive('img', function ($compile, $parse) {
//    return {
//        restrict: 'EA',
//        replace: false,
//        link: function ($scope, element, attrs) {
//            var $element = $(element);
//            if (!attrs.noloading) {
//                $element.after("<img src='img/loading.gif' class='loading' />");
//                var $loading = $element.next(".loading");
//                $element.load(function () {
//                    $loading.remove();
//                    $(this).addClass("doneLoading");
//                });
//            } else {
//                $($element).addClass("doneLoading");
//            }
//        }
//    };
//});
