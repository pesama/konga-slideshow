/**
 * Created by sm on 11/07/16.
 */

import template from './government.template.html';

export class GovernmentDirective {
    constructor() {
        console.log('loading directive');

        this.restrict = 'E';
        this.replace = true;
        this.scope = true;
        this.templateUrl = template;
    }

    link(scope, elt, attrs) {
        scope.step = 'init';

        scope.$on('government-planning', (evt, data) => {
            scope.step = 'planning';
        });

        scope.$on('government-planning-undo', (evt, data) => {
            scope.step = 'init';
        });

        scope.$on('government-users', (evt, data) => {
            scope.step = 'users';
        });

        scope.$on('government-users-undo', (evt, data) => {
            scope.step = 'planning';
        });

        scope.$on('government-presupuestor', (evt, data) => {
            scope.step = 'presupuestor';
        });

        scope.$on('government-presupuestor-undo', (evt, data) => {
            scope.step = 'users';
        });

        scope.$on('government-csc', (evt, data) => {
            scope.step = 'csc';
        });

        scope.$on('government-csc-undo', (evt, data) => {
            scope.step = 'presupuestor';
        });

        scope.$on('government-bbva', (evt, data) => {
            scope.step = 'bbva';
        });

        scope.$on('government-bbva-undo', (evt, data) => {
            scope.step = 'csc';
        });
    }
}

const wrapper = () => {
    return new GovernmentDirective();
};
wrapper.$inject = [];

export default wrapper;