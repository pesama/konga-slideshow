/**
 * Created by sm on 11/07/16.
 */

import template from './slides.template.html';

import { Script } from '../../util';

export class SlidesDirective {
    constructor(hotkeys) {
        console.log('loading directive');

        this.restrict = 'E';
        this.replace = true;
        this.scope = true;
        this.templateUrl = template;

        this.hotkeys = hotkeys;

        hotkeys.add({
            combo: 'left',
            description: 'Previous step',
            callback: () => {
                Script.previous();
            }
        });

        hotkeys.add({
            combo: 'right',
            description: 'Next step',
            callback: () => {
                Script.next();
            }
        });
    }

    link(scope, elt, attrs) {
        const init = window.slides_init;
        if(!init) {
            window.slides_init = true;
            impress().init();
        }
    }
}

const wrapper = (Hotkeys) => {
    return new SlidesDirective(Hotkeys);
};
wrapper.$inject = ['hotkeys'];

export default wrapper;