/**
 * Created by sm on 11/07/16.
 */

import template from './timeline.template.html';

export class TimelineDirective {
    constructor() {
        console.log('loading directive');

        this.restrict = 'E';
        this.replace = true;
        this.scope = true;
        this.templateUrl = template;
    }

    link(scope, elt, attrs) {
        scope.step = '2007';
        scope.hidden = false;

        scope.$on('timeline-2010', (evt, data) => {
            scope.step = '2010';
        });

        scope.$on('timeline-2010-undo', (evt, data) => {
            scope.step = '2007';
        });

        scope.$on('timeline-2012', (evt, data) => {
            scope.step = '2012';
        });

        scope.$on('timeline-2012-undo', (evt, data) => {
            scope.step = '2010';
        });

        scope.$on('timeline-2014', (evt, data) => {
            scope.step = '2014';
        });

        scope.$on('timeline-2014-undo', (evt, data) => {
            scope.step = '2012';
        });

        scope.$on('timeline-hide', (evt, data) => {
            scope.hidden = true;
        });

        scope.$on('timeline-hide-undo', (evt, data) => {
            scope.hidden = false;
        });

        scope.$on('timeline-show', (evt, data) => {
            scope.hidden = false;
        });

        scope.$on('timeline-show-undo', (evt, data) => {
            scope.hidden = true;
        });
    }
}

const wrapper = () => {
    return new TimelineDirective();
};
wrapper.$inject = [];

export default wrapper;