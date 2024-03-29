
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

//require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue'
window.axios = require('axios');
//import Vuetify from 'vuetify'

//Vue.use(Vuetify)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('AppHome', require('./components/AppHome.vue'));

import router from './router/router.js'

import User from './helpers/User'
window.User=User;

window.EventBus=new Vue();

//User.logOut();
console.log("LogInState:"+User.loggedIn());


const app = new Vue({
    el: '#app',
    router
});

