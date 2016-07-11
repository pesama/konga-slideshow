/**
 * Created by sm on 11/07/16.
 */

import angular from 'angular';

import view from './demo.view.html';
import controller from './demo.controller';

angular.module('konga-slideshow')
    .config(['$routeProvider', ($routeProvider) => {
        $routeProvider.when('/demo/', {
            templateUrl: view,
            controller: controller
        });
}]);