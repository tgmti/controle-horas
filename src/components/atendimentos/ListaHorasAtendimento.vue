<template>
    
    <div>

    <h1>
        Total de horas: {{totHours}}
    </h1>


    <v-text-field
        label="De: "
        type='date'
        :value.sync="datIni"
    ></v-text-field>


     <ListaHoras
        title="Lista Horas Atendimento"
        :headers="headers"
        :items="items"
        :fnLoadReg="fnLoadReg"
        :fnDelete="fnDelete"
        :datIni="datIni"
        :datFim="datFim"
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
        fnDelete: (item) => this.$store.dispatch('atendimento/delete', item),
      }
   },
	computed: {
        ...mapState('atendimento', {
            headers: 'listHeaders',
            datIni: 'datIni',
            datFim: 'datFim'
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
