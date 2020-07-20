import Vue from 'vue'
import Vuex from 'vuex'

import { siteStore } from './site.store.js';
import { userStore } from './user.store.js';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        siteStore,
        userStore
    }
})