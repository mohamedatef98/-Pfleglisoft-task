import Vue from 'vue/dist/vue.min.js';
import Vuetify from 'vuetify';

import 'vuetify/dist/vuetify.min.css';


import App from './App.vue';

Vue.config.devtools = true;

Vue.use(Vuetify);

let app = new Vue({
    el: '#app',
    components: {
        App
    },
});