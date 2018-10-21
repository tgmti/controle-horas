import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state : {
        ponto : {
            datapont: ( (new Date()).toLocaleDateString().split('/').reverse().join('-') ),
            ent1: null,
            sai1: null,
            ent2: null,
            sai2: null,
            obs: null,
        }
    },
    mutations: {
        savePonto (state, payload) {
          state.ponto = payload
        }
    },
    actions: {
        savePonto (context, ponto) {
            context.commit('savePonto', ponto)
        }
    }
})

export default store