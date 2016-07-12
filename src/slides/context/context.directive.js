/**
 * Created by sm on 11/07/16.
 */

import template from './context.template.html';

export class ContextDirective {
    constructor() {
        console.log('loading directive');

        this.restrict = 'E';
        this.replace = true;
        this.scope = true;
        this.templateUrl = template;
    }

    link(scope, elt, attrs) {
        scope.step = '';

        scope.$on('context-dev-growing', (evt, data) => {
            scope.step = 'growing';
        });

        scope.$on('context-dev-growing-undo', (evt, data) => {
            scope.step = '';
        });

        scope.$on('context-dev-growing-2', (evt, data) => {
            scope.step = 'growing-2';
        });

        scope.$on('context-dev-growing-2-undo', (evt, data) => {
            scope.step = 'growing';
        });

        scope.$on('context-api-awareness', (evt, data) => {
            scope.step = 'api-aware';
        });

        scope.$on('context-api-awareness-undo', (evt, data) => {
            scope.step = 'growing';
        });

        scope.$on('context-apis-social', (evt, data) => {
            scope.step = 'api-social';
        });

        scope.$on('context-apis-social-undo', (evt, data) => {
            scope.step = 'api-aware';
        });

        scope.$on('context-apis-info', (evt, data) => {
            scope.step = 'api-info';
        });

        scope.$on('context-apis-info-undo', (evt, data) => {
            scope.step = 'social';
        });

        scope.$on('context-apis-storage', (evt, data) => {
            scope.step = 'api-storage';
        });

        scope.$on('context-apis-storage-undo', (evt, data) => {
            scope.step = 'info';
        });

        scope.$on('context-apis-platform', (evt, data) => {
            scope.step = 'api-platform';
        });

        scope.$on('context-apis-platform-undo', (evt, data) => {
            scope.step = 'storage';
        });

        scope.$on('context-apis-misc', (evt, data) => {
            scope.step = 'api-misc';
        });

        scope.$on('context-apis-misc-undo', (evt, data) => {
            scope.step = 'platform';
        });
    }
}

const wrapper = () => {
    return new ContextDirective();
};
wrapper.$inject = [];

export default wrapper;