<template>
    
     <ListaHoras
        title="Lista Horas Modelo"
        :headers="headers"
        :items="items"
        :fnLoadReg="fnLoadReg"
        :fnDelete="fnDelete"
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
        fnLoadReg: (item) => this.$store.dispatch('ponto/edit', item),
        fnDelete: (item) => this.$store.dispatch('ponto/delete', item)
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
