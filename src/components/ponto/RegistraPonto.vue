<template>

  <v-form persistent>
    <v-container>
      <v-layout row wrap>

        <v-flex xs12 sm3>
            <v-menu
                ref="menu"
                :close-on-content-click="false"
                v-model="menu"
                :nudge-right="40"
                :return-value.sync="data"
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

        <v-flex xs6 sm1>
            <v-text-field
                label="Entrada"
                v-model="ent1"
                type="time"
                @keypress.enter="commitReg()"
            ></v-text-field>
        </v-flex>

        <v-flex xs6 sm1>
            <v-text-field
                label="Almoço"
                v-model="sai1"
                type="time"
                @keypress.enter="commitReg()"
            ></v-text-field>
        </v-flex>

        <v-flex xs6 sm1>
            <v-text-field
                label="Retorno"
                v-model="ent2"
                type="time"
                @keypress.enter="commitReg()"
            ></v-text-field>
        </v-flex>

        <v-flex xs6 sm1>
            <v-text-field
                label="Saída"
                v-model="sai2"
                type="time"
                @keypress.enter="commitReg()"
            ></v-text-field>
        </v-flex>

        <v-flex xs12 sm2>
            <v-text-field
                label="Observação"
                v-model="obs"
                @keypress.enter="commitReg()"
            ></v-text-field>
        </v-flex>
        <v-flex xs12 sm3>
            <v-btn fab dark small color="primary" @click="commitReg()">
                <v-icon dark>{{id ? 'refresh': 'add' }}</v-icon>
            </v-btn>
            <v-btn fab dark small color="grey" @click="resetForm">
                <v-icon dark>cancel</v-icon>
            </v-btn>
        </v-flex>

      </v-layout>
    </v-container>
    {{ponto}}
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
                if (this.$store.state.id)
                    db.collection(COLLECTION_PONTO).doc(this.$store.state.id).update(this.ponto).then(
                        this.$store.dispatch('resetPonto')
                    )
                else
                    db.collection(COLLECTION_PONTO).add(this.ponto).then(
                        this.$store.dispatch('resetPonto')
                    )
            },
            resetForm () {
                this.$store.dispatch('resetPonto')
            }
        },
        computed: {
            ...mapFields([
                'id',
                'data',
                'ent1',
                'sai1',
                'ent2',
                'sai2',
                'obs',
                'formatData'
            ]),
            ponto () {
                return {
                    id : this.$store.state.id,
                    data : this.$store.state.data,
                    ent1 : this.$store.state.ent1,
                    sai1 : this.$store.state.sai1,
                    ent2 : this.$store.state.ent2,
                    sai2 : this.$store.state.sai2,
                    obs : this.$store.state.obs
                }
            }
        }
    }
</script>

<style>

</style>
