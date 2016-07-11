/**
 * Created by sm on 07/07/16.
 */

import template from './slide.template.html';

const SlideDirective = () => {
    this.template = template;
    this.restrict = 'E';
    this.replace = true;

    this.init = (scope, elt, attrs) => {
        scope.test = 1;
    };
}

SlideDirective.$inject = [];

expor default SlideDirective;