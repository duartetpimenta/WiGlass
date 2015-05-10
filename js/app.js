/**
 * Created by Duarte on 14-04-2015.
 */
'use strict';

// App Module: the name AngularStore matches the ng-app attribute in the main <html> tag
// the route provides parses the URL and injects the appropriate partial page
var wiGlassApp = angular.module('WiGlass', ['ngRoute', 'ngMaterial', 'ngAnimate', 'ngTouch'])
    .controller('homeController', function($scope) {
        $scope.about = 'Acerca';
        $scope.contacts = 'Contactos';
        $scope.gallery = 'Galeria';
        $scope.home = 'Início';
    })
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.
            when('/home',{
                templateUrl: 'views/home.html',
                controller: commonController
            }).
            when('/about',{
                templateUrl: 'views/about.html',
                controller: commonController
            }).
            when('/gallery',{
                templateUrl: 'views/gallery.html',
                controller: galleryController
            }).
            when('/contacts',{
                templateUrl: 'views/contacts.html',
                controller: commonController
            }).
            otherwise({
                redirectTo: '/home'
            });
    }]);

// create a data service that provides a common controller that
// will be shared by all views (instead of creating fresh ones for each view).
wiGlassApp.factory("DataService", function(){

    // create common
    var my_common = new common();
    var my_gallery = new gallery();

    // return data object with common
    return{
        common: my_common,
        gallery: my_gallery
    };
});