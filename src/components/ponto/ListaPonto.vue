<template>

    <v-card>
        <v-card-title>
        Registro Ponto
        <v-spacer></v-spacer>
        <v-text-field
            v-model="search"
            append-icon="search"
            label="Search"
            single-line
            hide-details
        ></v-text-field>
        </v-card-title>
        <v-data-table
            :headers="headers"
            :items="registros"
            :search="search"
            item-key="id"
        >
            <template 
                slot="items" slot-scope="props"
            >
                <td>{{ formatData(props.item.data) }}</td>
                <td>{{ props.item.ent1 }}</td>
                <td>{{ props.item.sai1 }}</td>
                <td>{{ props.item.ent2 }}</td>
                <td>{{ props.item.sai2 }}</td>
                <td>{{ props.item.obs }}</td>
                <td class="justify-center layout px-0" >    
                    <v-icon 
                        small 
                        class="mr-2"
                        @click="loadRegistro(props.item.id)"
                    >
                        edit
                    </v-icon>
                    <v-icon
                        small
                        @click="delRegistro(props.item.id)"
                    >
                        delete
                    </v-icon>
                </td>
            </template>

            <template slot="no-data">
                <v-alert :value="true" color="error" icon="warning">
                    Sorry, nothing to display here :(
                </v-alert>
            </template>
        </v-data-table>

    </v-card>

</template>

<script>

import {db} from '../../config/db'

export default {


    name: "ListaPonto",
    data () {
      return {
        search: null,
        headers: [
            {
                text: 'Data',
                align: 'left',
                sortable: true,
                value: 'data'
            },
            { text: 'Entrada',    value: 'ent1' },
            { text: 'Almoço',     value: 'sai1' },
            { text: 'Retorno',    value: 'ent2' },
            { text: 'Saída',      value: 'sai2' },
            { text: 'Observação', value: 'obs'  },
            { text: 'Actions', value: 'name', sortable: false }
        ],
        registros: []
      }
    },
    firestore () {
        return {
            registros: db.collection('ponto')//.orderBy('data','desc')
        }
    },
    methods: {
        delRegistro (id) {
            db.collection('ponto').doc(id).delete()
        },
        formatData: (data) => {
            return !data ? null : (new Date(data)).toISOString().slice(0,10).split('-').reverse().join("/")
        },
        loadRegistro (id) {
            db.collection('ponto').doc(id).get().then( (ponto) =>
                this.$store.dispatch('savePonto', { ponto: ponto.data() } )
            )
            //this.$store.commit('updateField', { path: 'ponto', value: ponto.data() } )
            //console.log(ponto)
            //this.$store.commit('updateField', {path: 'formatData', value: '2018-12-04'} )


        }
    }
}
</script>

<style>

</style>
