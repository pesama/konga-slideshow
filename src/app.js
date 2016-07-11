/**
 * Created by sm on 11/07/16.
 */

import angular from 'angular';
import 'moment';
import ngRoute from 'angular-route';
import uiBootstrap from 'angular-ui-bootstrap';
import ngSanitize from 'angular-sanitize';
import 'angular-translate';
import 'angular-bootstrap-datetimepicker';
import 'angular-dialog-service';
import 'angular-file-upload';
import 'angular-strap';
import 'angular-ui-calendar';
import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngTouch from 'angular-touch';
import 'angular-translate-loader-static-files';
import 'angular-ui-sortable';
import 'angular-ui-tree';
import 'es5-shim';
import 'fullcalendar';
import 'json3';
import 'angular-hotkeys';
import '../node_modules/angular-strap/dist/angular-strap.tpl';
import ngFileUpload from 'ng-file-upload';

import konga from 'ui.konga';

import { Script as script } from './util';
import { Script } from './util/script';

angular.module('konga-slideshow', [
    ngAnimate,
    ngRoute,
    uiBootstrap,
    ngSanitize,
    "pascalprecht.translate",
    ngCookies,
    ngResource,
    "ui.bootstrap.datetimepicker",
    "dialogs.controllers",
    "dialogs.services",
    "angularFileUpload",
    "mgcrea.ngStrap.popover",
    "mgcrea.ngStrap.select",
    "ui.calendar",
    ngFileUpload,
    'cfp.hotkeys',

    konga
])
.config(['$locationProvider', ($locationProvider) => {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    }).hashPrefix('!')
}])
.config(['$routeProvider', ($routeProvider) => {
    // $routeProvider.when('/', {
    //     redirectTo: '/slides/'
    // });
}])
.run(['$rootScope', ($rootScope) => {
    script.init([
        {
            type: Script.STEP_IMPRESS_NEXT
        },
        {
            type: Script.STEP_DISPATCH_EVENT,
            event: 'disruptive-start',
            data: {}
        },
        {
            type: Script.STEP_IMPRESS_NEXT
        }
    ], $rootScope);
}]);