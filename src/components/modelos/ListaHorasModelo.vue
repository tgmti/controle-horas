<template>
    
     <ListaHoras
        title="Lista Horas Modelo"
        :headers="headers"
        :items="items"
        :fnLoadReg="fnLoadReg"
     ></ListaHoras>

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
        fnLoadReg: function(item) { 
            return item;
        }
      }
   },
	computed: {
		...mapState({
            items: state => state.ponto.registros,
            headers: state => state.ponto.headers
        })
    },
    created () {
        this.$store.dispatch('ponto/get');
    }

}
</script>

<style>

</style>
