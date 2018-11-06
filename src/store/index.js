import Vue from 'vue'
import Vuex from 'vuex'

import { getField, updateField } from 'vuex-map-fields';

import ponto from '@/store/ponto'
import atendimento from '@/store/atendimento'

Vue.use(Vuex)

const defaultState = () => ({
    id: null,
    data: ( (new Date()).toLocaleDateString().split('/').reverse().join('-') ),
    ent1: null,
    sai1: null,
    ent2: null,
    sai2: null,
    obs: null
});

const savePonto = (state, payload) => {
    state.id = payload.id
    state.data = payload.data
    state.ent1 = payload.ent1
    state.sai1 = payload.sai1
    state.ent2 = payload.ent2
    state.sai2 = payload.sai2
    state.obs = payload.obs
}

const initState = defaultState()

const store = new Vuex.Store({
    strict: true,
    state : initState,
    mutations: {
        updateField,
        savePonto
    },
    getters: {
        getField
    },
    actions: {
        savePonto (context, payload) {
            context.commit('savePonto', payload.ponto)
        },
        resetPonto (context) {
            context.dispatch('savePonto', { ponto: defaultState() } )
        }
    },
    modules: {
        ponto,
        atendimento
    }
})

export default store

