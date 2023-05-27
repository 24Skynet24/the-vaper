import Vue from 'vue';
import VueMask, { VueMaskDirective } from 'v-mask'

Vue.directive('mask', VueMaskDirective);
Vue.use(VueMask);
