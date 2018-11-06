<template>
    
     <ListaHoras
        title="Lista Horas Atendimento"
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
    name: 'ListaHorasAtendimento',
    
    components: {
        ListaHoras
    },

   data () {
      return {
        search: null,
        fnLoadReg: fnLoadReg
      }
   },
	computed: {
		...mapState({
            items: state => state.atendimento.registros,
            headers: state => state.atendimento.headers
        })
    },
    created () {
        this.$store.dispatch('atendimento/get');
    }

}
</script>

<style>

</style>
