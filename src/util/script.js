/**
 * Created by sm on 11/07/16.
 */

export class Script {

    static STEP_IMPRESS_NEXT = 'impress-next';
    static STEP_IMPRESS_PREVIOUS = 'impress-previous';
    static STEP_CONSOLE_LOG = 'console-log';
    static STEP_DISPATCH_EVENT = 'dispatch-event';

    constructor() {

    }

    init(steps, root) {
        this.steps = steps;
        this.root = root;
        this.index = -1;
    }

    next() {
        this.index++;
        this.process();
    }

    previous() {
        this.process(true);
        this.index--;
    }

    process(inverse = false) {
        console.log('processing');

        const step = this.steps[(this.index % this.steps.length)];

        switch(step.type) {
            case Script.STEP_IMPRESS_NEXT:
                if(!inverse) {
                    impress().next();
                }
                else {
                    impress().prev();
                }
                break;
            case Script.STEP_IMPRESS_PREVIOUS:
                if(!inverse) {
                    impress().prev();
                }
                else {
                    impress().next();
                }
                break;
            case Script.STEP_DISPATCH_EVENT:
                const event = step.event;
                const data = step.data;
                if(!inverse) {
                    this.root.$broadcast(event, data);
                }
                else {
                    this.root.$broadcast(event + '-undo', data);
                }
                break;
            case Script.STEP_CONSOLE_LOG:
                console.log(step.data);
                break;
        }

        const that = this;

        if(!inverse && step.options && step.options.auto_next) {
            setTimeout(() => {
                that.next();
                that.root.$apply();
            }, step.options.auto_next_duration || 500);

        }
        if(inverse && this.steps[this.index-1].options && this.steps[this.index-1].options.auto_next) {
            setTimeout(() => {
                that.previous();
                that.root.$apply();
            }, this.steps[this.index-1].options.auto_next_duration || 500);
        }
    }
}

export default new Script();