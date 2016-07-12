/**
 * Created by sm on 11/07/16.
 */

import template from './disruptive-advisory.template.html';

export class DisruptiveAdvisoryDirective {
    constructor() {
        console.log('loading directive');

        this.restrict = 'E';
        this.replace = true;
        this.scope = true;
        this.templateUrl = template;
    }

    link(scope, elt, attrs) {
        scope.step = 0;

        scope.$on('disruptive-start', (evt, data) => {
            scope.step = 1;
        });

        scope.$on('disruptive-start-undo', (evt, data) => {
            scope.step = 0;
        });

        scope.$on('lean-explanation', (evt, data) => {
            scope.step = 2;
        });

        scope.$on('lean-explanation-undo', (evt, data) => {
            scope.step = 1;
        });

        scope.$on('tdd-explanation', (evt, data) => {
            scope.step = 3;
        });

        scope.$on('tdd-explanation-undo', (evt, data) => {
            scope.step = 2;
        });

        scope.$on('dev-explanation', (evt, data) => {
            scope.step = 4;
        });

        scope.$on('dev-explanation-undo', (evt, data) => {
            scope.step = 3;
        });

        scope.$on('prod-explanation', (evt, data) => {
            scope.step = 5;
        });

        scope.$on('prod-explanation-undo', (evt, data) => {
            scope.step = 4;
        });

        scope.$on('disruptive-end', (evt, data) => {
            scope.step = 6;
        });

        scope.$on('disruptive-end-undo', (evt, data) => {
            scope.step = 5;
        });
    }
}

const wrapper = () => {
    return new DisruptiveAdvisoryDirective();
};
wrapper.$inject = [];

export default wrapper;