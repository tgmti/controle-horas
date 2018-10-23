import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex)

const store = new Vuex.Store({
    strict: true,
    state : {
        ponto : {
            id: null,
            data: (new Date()), //( (new Date()).toLocaleDateString().split('/').reverse().join('-') ),
            ent1: null,
            sai1: null,
            ent2: null,
            sai2: null,
            obs: null,
        },
        formatData: (new Date()).toLocaleDateString().split('/').reverse().join('-')
        
    },
    mutations: {
        updateField,

    },
    getters: {
        getField
    },
    actions: {
        savePonto (context, payload) {
            context.commit('updateField', { path: 'ponto', value: payload.ponto })
            context.commit('updateField', { path: 'formatData', value: (new Date(payload.ponto.data)).toISOString().slice(0,10) })
        }
    }
})

export default store