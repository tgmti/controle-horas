<template>
    
     <ListaHoras
        title="Lista Horas Atendimento"
        :headers="headers"
        :items="items"
        :fnLoadReg="fnLoadReg"
     ></ListaHoras>

</template>

<script>
import ListaHoras from '@/components/template/ListaHoras'
import { mapState } from 'vuex'

export default {
    name: 'ListaHorasAtendimento',    
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
