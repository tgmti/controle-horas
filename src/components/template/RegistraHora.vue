<template>

    <div>
        
    <v-toolbar flat>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>

      <v-spacer></v-spacer>

      <v-dialog v-model="dialog" max-width="80%">
        <v-btn slot="activator" color="primary" dark class="mb-2">Novo</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">{{ title }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Dessert name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Calories"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Fat (g)"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Carbs (g)"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Protein (g)"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="close">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-toolbar>


  <v-form>
    <v-container>
      <v-layout row wrap>

        <v-flex 
            v-for="(header, i) in headers"  :key="i"
            :class="classDef(header.type)"
        >

            <template v-if="computedItem.hasOwnProperty(header.value)" >
                <v-text-field
                    :label="header.text"
                    :type="(header.type || 'text')"
                    :value="computedItem[header.value]"
                    :disabled="true"
                ></v-text-field>
            </template>
            
            <template v-if="editedItem.hasOwnProperty(header.value)">
                <v-text-field
                    :label="header.text"
                    :type="(header.type || 'text')"
                    v-model="editedItem[header.value]"
                    @keypress.enter="commitReg"
                ></v-text-field>
            </template>
            
        </v-flex>

        <v-flex xs12 sm3>
            <v-btn fab dark small color="primary" @click="commitReg">
                <v-icon dark>{{editedItem.id ? 'refresh': 'add' }}</v-icon>
            </v-btn>
            <v-btn fab dark small color="grey" @click="resetForm">
                <v-icon dark>cancel</v-icon>
            </v-btn>
        </v-flex>

      </v-layout>
    </v-container>
  </v-form>
  

    </div>


</template>

<script>

export default {
    name: "RegistraHora",
    props: {
        title: { type: String, required: true, default: 'Registro de Horas' },
        headers: { type: Array, required: true },
        defaultItem: { type: Function, required: true },
        fnCommit: { type: Function, required: false },
        fnReset: { type: Function, required: false },
        editedItem: { type: Object, required: true },
        computedItem: { type: Object, required: false }
    },
    data () {
        return {
            menu:false,
            dialog: false
        }
    },
    watch: {
      dialog (val) {
        val || this.close()
      }
    },
    created () {
        this.resetForm()
    },
    methods: {
        commitReg () {
            if ( this.fnCommit ) {
                this.fnCommit(this.editedItem).then(() => {
                    this.dialog = false
                    this.resetForm()                    
                }
                )
            }
        },
        resetForm () {
            this.defaultItem()
        },
        close () {
            this.dialog = false
        },
        classDef (type) {
            if ( type === 'date') return ['xs12','sm2','md2'];
            if ( type === 'time') return ['xs6','sm1','md1'];
            return ['xs12','sm2'];
        }
    }
}
</script>

<style>

</style>
