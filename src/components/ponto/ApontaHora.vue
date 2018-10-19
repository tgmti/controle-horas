<template>

  <v-form>
    <v-container>
      <v-layout row wrap>

        <v-flex xs12 sm3>
            <v-menu
                ref="menu"
                :close-on-content-click="false"
                v-model="menu"
                :nudge-right="40"
                :return-value.sync="datapont"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
            >
                <v-text-field
                slot="activator"
                v-model="datapont"
                label="Data"
                prepend-icon="event"
                readonly
                ></v-text-field>
                <v-date-picker v-model="datapont" @input="$refs.menu.save(datapont)"></v-date-picker>

            </v-menu>
        </v-flex>

        <v-flex xs12 sm2>
            <v-text-field
                label="Hora inicial"
                v-model="horaini"
                type="time"
            ></v-text-field>
        </v-flex>

        <v-flex xs12 sm2>
            <v-text-field
                label="Hora final"
                v-model="horafim"
                type="time"
            ></v-text-field>
        </v-flex>

        <v-flex xs12 sm2>
            <v-text-field
                label="Desconto"
                v-model="desconto"
                type="time"
            ></v-text-field>
        </v-flex>

        <v-flex xs12 sm2>
            <v-text-field
                label="Translado"
                v-model="translado"
                type="time"
            ></v-text-field>
        </v-flex>



      </v-layout>
    </v-container>
  </v-form>

</template>

<script>

export default {


    name: "ApontaHora",
    data () {
      return {
        datapont: ( (new Date()).toISOString().slice(0,10) ),
        horaini: null,
        horafim: null,
        desconto: null,
        translado: null,
        menu:false
      }
    }    
}
</script>

<style>

</style>
