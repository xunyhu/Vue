import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import $ from 'jquery'
window.$ = $

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

import Vuex from 'vuex'
Vue.use(Vuex)


new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
