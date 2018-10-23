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
            <template slot="items" slot-scope="props">
                <td>{{ props.item.data }}</td>
                <td>{{ props.item.ent1 }}</td>
                <td>{{ props.item.sai1 }}</td>
                <td>{{ props.item.ent2 }}</td>
                <td>{{ props.item.sai2 }}</td>
                <td>{{ props.item.obs }}</td>
                <td>{{ props.item.id }}</td>
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
            { text: 'id', value: 'id'  }

        ],
        registros: []
      }
    },
    firestore () {
        return {
            registros: db.collection('ponto').orderBy('data','desc')
        }
    }
}
</script>

<style>

</style>
