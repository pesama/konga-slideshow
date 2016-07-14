/**
 * Created by sm on 11/07/16.
 */

import template from './architecture-metadata.template.html';

export class ArchitectureMetadataDirective {
    constructor() {
        console.log('loading directive');

        this.restrict = 'E';
        this.replace = true;
        this.scope = true;
        this.templateUrl = template;
    }

    link(scope, elt, attrs) {
        scope.step = 'init';

        scope.$on('architecture-metadata-data', (evt, data) => {
            scope.step = 'data';
        });

        scope.$on('architecture-metadata-data-undo', (evt, data) => {
            scope.step = 'init';
        });

        scope.$on('architecture-metadata-relations', (evt, data) => {
            scope.step = 'relations';
        });

        scope.$on('architecture-metadata-relations-undo', (evt, data) => {
            scope.step = 'data';
        });

        scope.$on('architecture-metadata-custom', (evt, data) => {
            scope.step = 'custom';
        });

        scope.$on('architecture-metadata-custom-undo', (evt, data) => {
            scope.step = 'relations';
        });

        scope.$on('architecture-metadata-generate', (evt, data) => {
            scope.step = 'generate';
        });

        scope.$on('architecture-metadata-generate-undo', (evt, data) => {
            scope.step = 'custom';
        });

        scope.$on('architecture-metadata-model', (evt, data) => {
            scope.step = 'model';
        });

        scope.$on('architecture-metadata-model-undo', (evt, data) => {
            scope.step = 'generate';
        });

        scope.$on('architecture-metadata-annotations', (evt, data) => {
            scope.step = 'annotations';
        });

        scope.$on('architecture-metadata-annotations-undo', (evt, data) => {
            scope.step = 'model';
        });

        scope.$on('architecture-metadata-maven', (evt, data) => {
            scope.step = 'maven';
        });

        scope.$on('architecture-metadata-maven-undo', (evt, data) => {
            scope.step = 'annotations';
        });

        scope.$on('architecture-metadata-rotate', (evt, data) => {
            scope.step = 'rotate';
        });

        scope.$on('architecture-metadata-rotate-undo', (evt, data) => {
            scope.step = 'maven';
        });
    }
}

const wrapper = () => {
    return new ArchitectureMetadataDirective();
};
wrapper.$inject = [];

export default wrapper;