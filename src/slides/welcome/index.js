/**
 * Created by sm on 11/07/16.
 */

import WelcomeDirective from './welcome.directive';
import './welcome.style.scss';

angular.module('konga-slideshow')
    .directive('welcome', WelcomeDirective);