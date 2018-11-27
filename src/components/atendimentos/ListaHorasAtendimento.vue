<template>
    
    <div>

    <h1>
        Total de horas: {{totHours}}
    </h1>

     <ListaHoras
        title="Lista Horas Atendimento"
        :headers="headers"
        :items="items"
        :fnLoadReg="fnLoadReg"
        :fnDelete="fnDelete"
     ></ListaHoras>
    
    </div>

</template>

<script>
import ListaHoras from '@/components/template/ListaHoras'
import { mapState, mapGetters } from 'vuex'

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
            headers: state => state.atendimento.listHeaders
        }),
        ...mapGetters(
            {items: 'atendimento/filteredReg',
            totHours: 'atendimento/totHours'}    
        )
        
    },
    created () {
        this.$store.dispatch('atendimento/get');
    }

}
</script>

<style>

</style>
