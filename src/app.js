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
        // {
        //     type: Script.STEP_IMPRESS_NEXT
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'disruptive-start',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'lean-explanation',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'tdd-explanation',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'dev-explanation',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'prod-explanation',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'disruptive-end',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_IMPRESS_NEXT
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'toc-context',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'toc-government',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'toc-architecture',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'toc-development',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'toc-deployment',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'toc-closure',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'toc-qa',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'toc-finish',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_IMPRESS_NEXT
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'context-dev-growing',
        //     data: {},
        //     options: {
        //         auto_next: true,
        //         auto_next_duration: 0
        //     }
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'timeline-2010',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_IMPRESS_NEXT
        // },
        // {
        //     type: Script.STEP_IMPRESS_PREVIOUS
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'context-dev-growing-2',
        //     data: {},
        //     options: {
        //         auto_next: true,
        //         auto_next_duration: 0
        //     }
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'timeline-2012',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_IMPRESS_GOTO,
        //     data: {
        //         target: 'context-rampagejs'
        //     }
        // },
        // {
        //     type: Script.STEP_IMPRESS_GOTO,
        //     data: {
        //         target: 'context'
        //     }
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'timeline-2014',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'context-api-awareness',
        //     data: {},
        //     options: {
        //         auto_next: true,
        //         auto_next_duration: 500
        //     }
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'timeline-hide',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'context-apis-social',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'context-apis-info',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'context-apis-storage',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'context-apis-platform',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'context-apis-misc',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_IMPRESS_GOTO,
        //     data: {
        //         target: 'context-puzzle'
        //     }
        // },
        // {
        //     type: Script.STEP_IMPRESS_NEXT
        // },
        // {
        //     type: Script.STEP_IMPRESS_NEXT
        // },
        // {
        //     type: Script.STEP_IMPRESS_NEXT
        // },
        // {
        //     type: Script.STEP_IMPRESS_NEXT
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'architecture-init-metadata',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_IMPRESS_NEXT
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'architecture-metadata-data',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'architecture-metadata-relations',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'architecture-metadata-custom',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'architecture-metadata-generate',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'architecture-metadata-model',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'architecture-metadata-annotations',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'architecture-metadata-maven',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_IMPRESS_GOTO,
        //     data: {
        //         target: 'architecture-overview'
        //     },
        //     options: {
        //         auto_next: true,
        //         auto_next_duration: 1500
        //     }
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'architecture-metadata-rotate',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'architecture-init-engine',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_IMPRESS_GOTO,
        //     data: {
        //         target: 'architecture-engine'
        //     }
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'architecture-engine-data',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'architecture-engine-existing',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'architecture-engine-custom',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'architecture-engine-federate',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'architecture-engine-model',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_IMPRESS_GOTO,
        //     data: {
        //         target: 'architecture-overview'
        //     },
        //     options: {
        //         auto_next: true,
        //         auto_next_duration: 1500
        //     }
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'architecture-engine-rotate',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_IMPRESS_GOTO,
        //     data: {
        //         target: 'government'
        //     }
        // },
        // {
        //     type: Script.STEP_IMPRESS_NEXT
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'government-planning',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'government-users',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'government-presupuestor',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'government-csc',
        //     data: {}
        // },
        // {
        //     type: Script.STEP_DISPATCH_EVENT,
        //     event: 'government-bbva',
        //     data: {}
        // },
        {
            type: Script.STEP_IMPRESS_GOTO,
            data: {
                target: 'examples-overview'
            }
        },
        {
            type: Script.STEP_IMPRESS_NEXT
        },
        {
            type: Script.STEP_IMPRESS_NEXT
        },
        {
            type: Script.STEP_IMPRESS_NEXT
        },
        {
            type: Script.STEP_IMPRESS_GOTO,
            data: {
                target: 'closure'
            }
        },

    ], $rootScope);
}]);