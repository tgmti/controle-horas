<template>

    <ListaHoras
        title="Registro Ponto"
        :headers="headers"
        :items="registros"
        :fnLoadReg="loadRegistro"
        :fnDelete="delRegistro"
    ></ListaHoras>

</template>

<script>
import ListaHoras from '@/components/template/ListaHoras'
import {db, COLLECTION_PONTO} from '@/store/firedb'

const headers = [
    { text: 'Data'      , value: 'data', align: 'left' },
    { text: 'Entrada'   , value: 'ent1' },
    { text: 'Almoço'    , value: 'sai1' },
    { text: 'Retorno'   , value: 'ent2' },
    { text: 'Saída'     , value: 'sai2' },
    { text: 'Observação', value: 'obs'  },
    { text: 'Actions'   , value: 'name', sortable: false }
]

export default {

    name: "ListaPonto",
    components: {ListaHoras},
    data () {
      return {
        search: null,
        headers: headers,
        registros: []
      }
    },
    firestore () {
        return {
            registros: db.collection(COLLECTION_PONTO)//.orderBy('data','desc')
        }
    },
    methods: {
        delRegistro (item) {
            db.collection(COLLECTION_PONTO).doc(item.id)
        },
        formatData: (data) => {
            return !data || typeof data !== 'string' ? null : (new Date(data)).toISOString().slice(0,10).split('-').reverse().join('/')
        },
        loadRegistro (item) {
            db.collection(COLLECTION_PONTO).doc(item.id).get().then( (resp) => {
                let registro = resp.data()
                registro.id = resp.id
                return this.$store.dispatch('savePonto', { ponto: registro } )
            })
        }
    }
}
</script>

<style>

</style>
