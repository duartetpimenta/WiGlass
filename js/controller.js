/**
 * Created by Duarte on 15-04-2015.
 */
'use strict';

// the commonController
function commonController($scope, $routeParams, DataService){
    $scope.common = DataService.common;
}

function galleryController($scope, $routeParams, DataService){
    $scope.gallery = DataService.gallery;
}