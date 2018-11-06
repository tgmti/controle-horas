<template>
    
     <ListaHoras
        title="Lista Horas Modelo"
        :headers="headers"
        :items="items"
        :fnLoadReg="fnLoadReg"
     ></ListaHoras>

</template>

<script>
import ListaHoras from '@/components/ListaHoras/ListaHoras'

import { mapState } from 'vuex'

const fnLoadReg = function(item) { 
    console.log('fnLoadReg') 
    console.log(item.data) 
}


export default {
    name: 'ListaHorasModelo',
    
    components: {
        ListaHoras
    },

   data () {
      return {
        search: null,
        headers: [
            { text: 'Data'      , value: 'data', align: 'left' },
            { text: 'Entrada'   , value: 'ent1' }
        ],
        fnLoadReg: fnLoadReg
      }
   },
	computed: {
		...mapState({
			items: state => state.ponto.registros
        })
    },
    created () {
        this.$store.dispatch('ponto/get');
    }

}
</script>

<style>

</style>
