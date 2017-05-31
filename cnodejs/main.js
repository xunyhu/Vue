import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import $ from 'jquery'
window.$ = $

import MuseUi from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUi)

import index from './views/index.vue'
import list from './components/list.vue'
import datail from './components/detail.vue'

import Vuex from 'vuex'
Vue.use(Vuex)

import './lib/github-markdown.css'

var store = new Vuex.Store({
	state: {
		tab: 'all',
		open: false,
		items: [],
		page: 1,
		flag: false,
	},
	mutations: {
		hideSide: function(state,val) {
			state.open = val;
		},
		addPage: function(state,val) {
			//console.log(val);
			state.page = val;
			state.flag = true,
			$.ajax({
				type: 'get',
				url: "https://cnodejs.org/api/v1/topics?page="+ val +"&tab="+ state.tab,
				dataType: "json",
				success: function(data) {
					state.items = state.items.concat(data.data);
					state.flag = false;
				}
			})
		},
		setTab: function(state,val) {
			state.tab = val;
			$.ajax({
				type: 'get',
				url: "https://cnodejs.org/api/v1/topics?tab="+ val,
				dataType: "json",
				success: function(data) {
					state.items = data.data;
					//console.log(data)
				}
			})
		}

	},
	getters: {
		showSide: function(state) {
			return state.open;
		},
		selectTab: function(state) {
			return state.tab;
		},
		listiTems: function(state) {
			return state.items;
		},
		pageNum: function(state) {
			return state.page;
		},
		flag: function(state) {
			return state.flag;
		}
	}
})

var router = new VueRouter({
	routes: [{
		path: '/index',
		component: index,
		children: [{
			path: 'list',
			component: list
		}]
	},{
		path: '/',
		redirect: '/index/list'
	},{
		path: '/detail/:id',
		component: datail
	}]
})

new Vue({
	el: '#demo',
	router,
	store,
	template:`<router-view></router-view>`
})