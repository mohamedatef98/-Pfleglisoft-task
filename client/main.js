import Vue from 'vue/dist/vue.min.js';
import Vuetify from 'vuetify';

import 'vuetify/dist/vuetify.min.css';


import App from './App.vue';

Vue.config.devtools = true;

Vue.use(Vuetify,{
    theme: {
      primary: '#3f51b5',
      secondary: '#b0bec5',
      accent: '#8c9eff',
      error: '#b71c1c'
    }
  });

let app = new Vue({
    el: '#app',
    components: {
        App
    },
});