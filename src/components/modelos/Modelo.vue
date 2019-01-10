<template>
    <div>
        <v-container fluid>
            <v-layout column>
                <v-card>
                    <v-card-title>
                        <strong>Filtros: </strong>
                        <v-spacer></v-spacer>

                        <v-text-field
                            label="De: "
                            type='date'
                            v-model="datFrom"
                            append-icon="event"
                        ></v-text-field>

                        <v-spacer></v-spacer>

                        <v-text-field
                            label="Até: "
                            type='date'
                            v-model="datTo"
                        ></v-text-field>
                    
                        <v-spacer></v-spacer>
                        
                        <v-text-field
                            v-model="search"
                            append-icon="search"
                            label="Filtro"
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
                                        {{header.type === 'date' ? formatData(props.item[header.value]) : props.item[header.value]}}
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

                                <template slot="expand">
                                        <p>Teste</p>
                                </template>

                                <template slot="no-data">
                                    <v-alert :value="true" color="error" icon="warning">
                                        Sorry, nothing to display here :(
                                    </v-alert>
                                </template>
                            </v-data-table>
                        </v-card>
            </v-layout>
        </v-container>
    
    </div>    
</template>

<script>
import RegistraHoraModelo from '@/components/modelos/RegistraHoraModelo'
import ListaHorasModelo from '@/components/modelos/ListaHorasModelo'

import { mapState } from 'vuex'

export default {
  name: 'Modelo',
  components: {
    RegistraHoraModelo,
    ListaHorasModelo
    
  },
  data () {
    return {}
  },
	computed: {
        ...mapState({
            items: state => state.ponto.registros,
            headers: state => state.ponto.headers,
            datIni: state => state.atendimento.datIni,
            datFim: state => state.atendimento.datFim
        })
    },        
    created () {
        this.$store.dispatch('ponto/get');
    }

}
</script>

<style scoped>
    div.content {
        margin-left: 10px;
        margin-right: 10px
    }
</style>
