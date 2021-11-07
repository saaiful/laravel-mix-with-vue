require('./bootstrap');
import Vue from 'vue/dist/vue';
window.Vue = Vue;

import VueRouter from 'vue-router';
Vue.use(VueRouter);

axios.interceptors.response.use(function (response) {
	console.log(response);
    return response;
}, function (error) {
	console.log(error);
	if(error.response.status==404){
		setTimeout(function() { location.replace('#/404'); }, 10);
		return Promise.reject(error);
	}
	if(error.response.status==401){
		setTimeout(function() { location.replace('login'); }, 10);
		return Promise.reject(error);
	}
    return Promise.reject(error);
});


const router = new VueRouter({
	routes: [
		{ path: '/',component: require('./components/Home.vue').default },
		{ path: '*',component: require('./components/404.vue').default },
	]
});

const app = new Vue({
	el: '#app',
	router: router,
	data: {},
	methods: {},
	watch: {},
	mounted: function() {}
});
