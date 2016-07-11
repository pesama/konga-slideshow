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

            jsPlumb.connect({
                source: 'element1',
                target: 'element2',
                scope: 'some'
            });
        });

        scope.$on('disruptive-start-undo', (evt, data) => {
            scope.step = 0;
        });
    }
}

const wrapper = () => {
    return new DisruptiveAdvisoryDirective();
};
wrapper.$inject = [];

export default wrapper;