<template>
    
     <ListaHoras
        title="Lista Horas Teste"
        :headers="headers"
        :items="items"
        :fnLoadReg="fnLoadReg"
     ></ListaHoras>

</template>

<script>
import ListaHoras from '@/components/ListaHoras/ListaHoras'

const fnLoadReg = function(item) { 
    console.log('fnLoadReg') 
    console.log(item.data) 
}

export default {
    name: 'ListaHorasTest',
    
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
        items: [{ data:'2018-09-20', ent1: '11:58' },{ data:'2018-09-20', ent1: '11:59' }],
        fnLoadReg: fnLoadReg
      }
   }    
}
</script>

<style>

</style>
