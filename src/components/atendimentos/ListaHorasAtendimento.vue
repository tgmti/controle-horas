<template>
    
     <ListaHoras
        title="Lista Horas Atendimento"
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
    name: 'ListaHorasAtendimento',    
    components: {
        ListaHoras
    },
   data () {
      return {
        fnLoadReg: (item) => this.$store.dispatch('atendimento/edit', item),
        fnDelete: (item) => this.$store.dispatch('atendimento/delete', item)
      }
   },
	computed: {
		...mapState({
            items: state => state.atendimento.registros,
            headers: state => state.atendimento.listHeaders
        })
    },
    created () {
        this.$store.dispatch('atendimento/get');
    }

}
</script>

<style>

</style>
