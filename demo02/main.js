import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

var index = require('./components/index.vue')
var list = require('./components/list.vue')
var listaa = require('./components/listaa.vue')
var listbb = require('./components/listbb.vue')
var detail = require('./components/detail.vue')

var router = new VueRouter({
	routes : [{
		path : "/index",
		component : index
	},{
		path : "/list",
		component : list,
		children: [{
			path: "aa",
			component: listaa,
		}, {
			path: "bb",
			component: listbb,
		}]
	},{
		path : "/detail",
		component : detail
	},{
		path: '/',
		redirect: 'index'
	}]
});


new Vue({
	el : "#demo",
	template : `
		<div>
			<a href="#/index">index</a>
			<a href="#/list">list</a>
			<a href="#/detail">detail</a>
			<router-view></router-view>
		</div>
	`,
	router,
	data : {
		name : 'xunyhu'
	}
})