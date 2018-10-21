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
                :return-value.sync="ponto.datapont"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
            >
                <v-text-field
                slot="activator"
                v-model="ponto.datapont"
                label="Data"
                prepend-icon="event"
                type="date"
                ></v-text-field>
                <v-date-picker v-model="ponto.datapont" @input="$refs.menu.save(ponto.datapont)"></v-date-picker>

            </v-menu>
        </v-flex>

        <v-flex xs6 sm2>
            <v-text-field
                label="Entrada"
                v-model="ponto.ent1"
                type="time"
                @keypress.enter="console.log(ponto)"
            ></v-text-field>
        </v-flex>

        <v-flex xs6 sm2>
            <v-text-field
                label="Almoço"
                v-model="ponto.ent2"
                type="time"
            ></v-text-field>
        </v-flex>

        <v-flex xs6 sm2>
            <v-text-field
                label="Retorno"
                v-model="ponto.sai1"
                type="time"
            ></v-text-field>
        </v-flex>

        <v-flex xs6 sm2>
            <v-text-field
                label="Saída"
                v-model="ponto.sai2"
                type="time"
            ></v-text-field>
        </v-flex>

        <v-flex xs12 sm2>
            <v-text-field
                label="Observação"
                v-model="ponto.obs"
            ></v-text-field>
        </v-flex>

      </v-layout>
    </v-container>

    {{ this.$store.state.ponto }}
  </v-form>

</template>

<script>

export default {
    name: "RegistraPonto",
    data () {
        const ponto = this.$store.state.ponto
    
      return {
          ponto: {
              datapont: ponto.datapont,
              ent1: ponto.ent1,
              sai1: ponto.sai1,
              ent2: ponto.ent2,
              sai2: ponto.sai2,
              obs: ponto.obs,
          },
        menu:false,
        newponto: null
      }
    }
}
</script>

<style>

</style>
