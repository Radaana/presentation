import Vue from 'vue'
import Vuex from 'vuex'

import survey from './store-modules/survey'
import slides from './store-modules/slides'
import messages from './store-modules/messages'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {

    },
    modules: {
        survey,
        slides,
        messages
    }
})