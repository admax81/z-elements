import Vue from 'vue';
import Table from  './table/index.vue';
import Dialog from  './dialog/index.vue';
import Screen from  './screen/index.vue';
import Loading from  './loading/index.vue';
import Icon from  './icon/index.vue';
import FormInput from  './form/input.vue';
import FormSwitch from  './form/switch.vue';
import FormRadio from  './form/radio.vue';
import FormTextarea from  './form/textarea.vue';
import Tabs from  './tabs/index.vue';
import Button from './button/index.vue';

const zElementsPlugin = {
  install(Vue) {
    Vue.component('e-table', Table);
    Vue.component('e-dialog', Dialog);
    Vue.component('e-screen', Screen);
    Vue.component('e-loading', Loading);
    Vue.component('e-icon', Icon);
    Vue.component('e-form-input', FormInput);
    Vue.component('e-form-switch', FormSwitch);
    Vue.component('e-form-radio', FormRadio);
    Vue.component('e-form-textarea', FormTextarea);
    Vue.component('e-tabs', Tabs);
    Vue.component('e-button', Button);
  }
};

export default zElementsPlugin;