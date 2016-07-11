/**
 * Created by sm on 11/07/16.
 */

import template from './welcome.template.html';

export class WelcomeDirective {
    constructor() {
        console.log('loading directive');

        this.restrict = 'E';
        this.replace = true;
        this.scope = true;
        this.templateUrl = template;
    }

    link(scope, elt, attrs) {
        
    }
}

const wrapper = () => {
    return new WelcomeDirective();
};
wrapper.$inject = [];

export default wrapper;