/**
 * Created by sm on 07/07/16.
 */

import angular from 'angular';

import SlidesDirective from './slides.directive';

angular.module('konga-slideshow')
    .directive('slides', SlidesDirective);