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
            :items="desserts"
            :search="search"
        >
            <template slot="items" slot-scope="props">
                <td>{{ props.item.datapont }}</td>
                <td>{{ props.item.ent1 }}</td>
                <td>{{ props.item.sai1 }}</td>
                <td>{{ props.item.ent2 }}</td>
                <td>{{ props.item.sai2 }}</td>
                <td>{{ props.item.obs }}</td>
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
                value: 'datapont'
            },
            { text: 'Entrada',    value: 'ent1' },
            { text: 'Almoço',     value: 'sai1' },
            { text: 'Retorno',    value: 'ent2' },
            { text: 'Saída',      value: 'sai2' },
            { text: 'Observação', value: 'obs'  }

        ],
        desserts: [ 
            {datapont: '01/12/2018', ent1: '08:00', sai1: '12:00', ent2: '14:00', sai2 : '18:00', obs: "teste1"},
            {datapont: '01/12/2018', ent1: '08:00', sai1: '12:00', ent2: '14:00', sai2 : '18:00', obs: "teste2"},
            {datapont: '01/12/2018', ent1: '08:00', sai1: '12:00', ent2: '14:00', sai2 : '18:00', obs: "teste3"},
            {datapont: '01/12/2018', ent1: '08:00', sai1: '12:00', ent2: '14:00', sai2 : '18:00', obs: "teste4"},
            {datapont: '01/12/2018', ent1: '08:00', sai1: '12:00', ent2: '14:00', sai2 : '18:00', obs: "teste5"},
            {datapont: '01/12/2018', ent1: '08:00', sai1: '12:00', ent2: '14:00', sai2 : '18:00', obs: "teste6"},
            {datapont: '01/12/2018', ent1: '08:00', sai1: '12:00', ent2: '14:00', sai2 : '18:00', obs: "teste7"},
            {datapont: '01/12/2018', ent1: '08:00', sai1: '12:00', ent2: '14:00', sai2 : '18:00', obs: "teste8"}
        ]
      }
    }    
}
</script>

<style>

</style>
