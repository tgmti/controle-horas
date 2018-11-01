<template>

    <v-card>
        <v-card-title>
            {{title}}
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
            :items="items"
            :search="search"
            item-key="id"
        >
            <template 
                slot="items" slot-scope="props"
            >
                <td v-for="(header, i) in headers"  :key="i" >
                    {{props.item[header.value]}}
                </td>

                <td class="justify-center layout px-0" >    
                    <v-icon 
                        small 
                        class="mr-2"
                        @click="loadReg(props.item)"
                    >
                        edit
                    </v-icon>
                    <v-icon
                        small
                        @click="delReg(props.item)"
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

function data () {
    return {
    search: null,
    }
}

export default {
    name: "ListaHoras",
    data,
    props: {
        title : { type : String , required: true },
        headers: { type: Array, required: true },
        items: { type: Array, required: false },
        fnLoadReg: { type: Function, required: false },
        fnDelete: { type: Function, required: false }
    },
    methods: { 
        loadReg: function(item){ this.fnLoadReg ? this.fnLoadReg(item) : console.log(item)}, 
        delReg: function(item){ this.fnDelete ? this.fnDelete(item) : console.log(item)}, 
    }
}

</script>

<style>

</style>
