/**
 * Created by sm on 11/07/16.
 */

import template from './architecture-engine.template.html';

export class ArchitectureEngineDirective {
    constructor() {
        console.log('loading directive');

        this.restrict = 'E';
        this.replace = true;
        this.scope = true;
        this.templateUrl = template;
    }

    link(scope, elt, attrs) {
        scope.step = 'init';

        scope.$on('architecture-engine-data', (evt, data) => {
            scope.step = 'data';
        });

        scope.$on('architecture-engine-data-undo', (evt, data) => {
            scope.step = 'init';
        });

        scope.$on('architecture-engine-existing', (evt, data) => {
            scope.step = 'existing';
        });

        scope.$on('architecture-engine-existing-undo', (evt, data) => {
            scope.step = 'data';
        });

        scope.$on('architecture-engine-custom', (evt, data) => {
            scope.step = 'custom';
        });

        scope.$on('architecture-engine-custom-undo', (evt, data) => {
            scope.step = 'existing';
        });

        scope.$on('architecture-engine-federate', (evt, data) => {
            scope.step = 'federate';
        });

        scope.$on('architecture-engine-federate-undo', (evt, data) => {
            scope.step = 'custom';
        });

        scope.$on('architecture-engine-model', (evt, data) => {
            scope.step = 'model';
        });

        scope.$on('architecture-engine-model-undo', (evt, data) => {
            scope.step = 'federate';
        });

        scope.$on('architecture-engine-deployment', (evt, data) => {
            scope.step = 'deployment';
        });

        scope.$on('architecture-engine-deployment-undo', (evt, data) => {
            scope.step = 'model';
        });

        scope.$on('architecture-engine-rotate', (evt, data) => {
            scope.step = 'rotate';
        });

        scope.$on('architecture-engine-rotate-undo', (evt, data) => {
            scope.step = 'deployment';
        });
    }
}

const wrapper = () => {
    return new ArchitectureEngineDirective();
};
wrapper.$inject = [];

export default wrapper;