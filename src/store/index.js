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
    }
})

export default store