<template>

  <v-form persistent>
    <v-container>
      <v-layout row wrap>

        <v-flex xs12 sm2>
            <v-menu
                ref="menu"
                :close-on-content-click="false"
                v-model="menu"
                :nudge-right="40"
                :return-value.sync="ponto.data"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
            >
                <v-date-picker 
                    v-model="formatData" 
                    :formatted-value.sync="formatData"
                    @input="$refs.menu.save(formatData)">
                </v-date-picker>

                <v-text-field
                    slot="activator"
                    v-model="formatData"
                    @input="$refs.menu.save(formatData)"
                    label="Data"
                    prepend-icon="event"
                    type="date"
                ></v-text-field>

            </v-menu>
        </v-flex>

        <v-flex xs6 sm2>
            <v-text-field
                label="Entrada"
                v-model="ponto.ent1"
                type="time"
                @keypress.enter="commitReg(ponto)"
            ></v-text-field>
        </v-flex>

        <v-flex xs6 sm2>
            <v-text-field
                label="Almoço"
                v-model="ponto.ent2"
                type="time"
                @keypress.enter="commitReg(ponto)"
            ></v-text-field>
        </v-flex>

        <v-flex xs6 sm2>
            <v-text-field
                label="Retorno"
                v-model="ponto.sai1"
                type="time"
                @keypress.enter="commitReg(ponto)"
            ></v-text-field>
        </v-flex>

        <v-flex xs6 sm2>
            <v-text-field
                label="Saída"
                v-model="ponto.sai2"
                type="time"
                @keypress.enter="commitReg(ponto)"
            ></v-text-field>
        </v-flex>

        <v-flex xs12 sm2>
            <v-text-field
                label="Observação"
                v-model="ponto.obs"
                @keypress.enter="commitReg(ponto)"
            ></v-text-field>
        </v-flex>

      </v-layout>
    </v-container>
    {{ponto}}
    {{this.$store.state.ponto}}
  </v-form>

</template>

<script>

import { mapFields } from 'vuex-map-fields';
import db, {COLLECTION_PONTO} from '../../config/db'

export default {
    name: "RegistraPonto",
    data () {
        return {
            menu:false
        }
    },
    methods: {
        commitReg () {
            const ponto = this.$store.state.ponto
            if (ponto.id)
                db.collection(COLLECTION_PONTO).doc(ponto.id).update(ponto)
            else
                db.collection(COLLECTION_PONTO).add(ponto)
        }
    },
    computed: {
        ...mapFields([
            'ponto',
            'ponto.id',
            'ponto.data',
            'ponto.ent1',
            'ponto.sai1',
            'ponto.ent2',
            'ponto.sai2',
            'ponto.obs',
            'formatData'
        ])
    }
}
</script>

<style>

</style>
