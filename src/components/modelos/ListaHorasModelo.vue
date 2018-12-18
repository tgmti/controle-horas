<template>
    
    <div>

        <h1>{{this.datFim}}</h1>

     <ListaHoras
        title="Lista Horas Modelo"
        :headers="headers"
        :items="items"
        :fnLoadReg="fnLoadReg"
        :fnDelete="fnDelete"
        :datIni="datIni"
        :datFim="datFim"
        @syncValue="this.syncState"
     ></ListaHoras>



    </div>

</template>

<script>
import ListaHoras from '@/components/template/ListaHoras'

import { mapState } from 'vuex'

export default {
    name: 'ListaHorasModelo',
    
    components: {
        ListaHoras
    },

   data () {
      return {
        fnLoadReg: (item) => this.$store.dispatch('ponto/edit', item),
        fnDelete: (item) => this.$store.dispatch('ponto/delete', item)
      }
   },
   methods: {
        syncState: function (payload) {
            this.$store.commit('atendimento/UPDATE_FIELD', payload);
        },

   },
	computed: {
        // datIni:  {
        //     get() { return this.$store.state.atendimento.datIni },
        //     set(v) { 
        //         this.$store.commit('atendimento/UPDATE_FIELD', {name: 'datIni', value: v});
        //     }
        // },
        // datFim:  {
        //     get() { return this.$store.state.atendimento.datFim },
        //     set(v) { 
        //         this.$store.commit('atendimento/UPDATE_FIELD', {name: 'datFim', value: v});
        //     }
        // },

        ...mapState({
            items: state => state.ponto.registros,
            headers: state => state.ponto.headers,
            datIni: state => state.atendimento.datIni,
            datFim: state => state.atendimento.datFim,
        })
    },
    created () {
        this.$store.dispatch('ponto/get');
    }

}
</script>

<style>

</style>
