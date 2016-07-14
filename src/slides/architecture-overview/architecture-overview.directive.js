/**
 * Created by sm on 11/07/16.
 */

import template from './architecture-overview.template.html';

export class ArchitectureOverviewDirective {
    constructor() {
        console.log('loading directive');

        this.restrict = 'E';
        this.replace = true;
        this.scope = true;
        this.templateUrl = template;
    }

    link(scope, elt, attrs) {
        scope.step = 'init';

        scope.$on('architecture-init-metadata', (evt, data) => {
            scope.step = 'metadata';
        });

        scope.$on('architecture-init-metadata-undo', (evt, data) => {
            scope.step = 'init';
        });

        scope.$on('architecture-init-engine', (evt, data) => {
            scope.step = 'engine';
        });

        scope.$on('architecture-init-engine-undo', (evt, data) => {
            scope.step = 'metadata';
        });
    }
}

const wrapper = () => {
    return new ArchitectureOverviewDirective();
};
wrapper.$inject = [];

export default wrapper;