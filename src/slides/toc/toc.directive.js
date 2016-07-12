/**
 * Created by sm on 11/07/16.
 */

import template from './toc.template.html';

export class TocDirective {
    constructor() {
        console.log('loading directive');

        this.restrict = 'E';
        this.replace = true;
        this.scope = true;
        this.templateUrl = template;
    }

    link(scope, elt, attrs) {
        scope.step = '';

        scope.$on('toc-context', (evt, data) => {
            scope.step = 'context';
        });

        scope.$on('toc-context-undo', (evt, data) => {
            scope.step = '';
        });


        scope.$on('toc-government', (evt, data) => {
            scope.step = 'government';
        });

        scope.$on('toc-government-undo', (evt, data) => {
            scope.step = 'context';
        });


        scope.$on('toc-architecture', (evt, data) => {
            scope.step = 'architecture';
        });

        scope.$on('toc-architecture-undo', (evt, data) => {
            scope.step = 'government';
        });


        scope.$on('toc-development', (evt, data) => {
            scope.step = 'development';
        });

        scope.$on('toc-development-undo', (evt, data) => {
            scope.step = 'architecture';
        });


        scope.$on('toc-deployment', (evt, data) => {
            scope.step = 'deployment';
        });

        scope.$on('toc-deployment-undo', (evt, data) => {
            scope.step = 'development';
        });


        scope.$on('toc-closure', (evt, data) => {
            scope.step = 'closure';
        });

        scope.$on('toc-closure-undo', (evt, data) => {
            scope.step = 'deployment';
        });


        scope.$on('toc-qa', (evt, data) => {
            scope.step = 'qa';
        });

        scope.$on('toc-qa-undo', (evt, data) => {
            scope.step = 'closure';
        });

        scope.$on('toc-finish', (evt, data) => {
            scope.step = '';
        });

        scope.$on('toc-finish-undo', (evt, data) => {
            scope.step = 'qa';
        });
    }
}

const wrapper = () => {
    return new TocDirective();
};
wrapper.$inject = [];

export default wrapper;