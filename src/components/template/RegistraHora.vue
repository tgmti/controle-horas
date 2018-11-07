<template>

  <v-form persistent>
    <v-container>
      <v-layout row wrap>

        <v-flex 
            v-for="(header, i) in headers"  :key="i"
            :class="classDef(header.type)"
        >
            <v-text-field
                :label="header.text"
                :type="(header.type || 'text')"
                v-model="editedItem[header.value]"
                @keypress.enter="commitReg"
            ></v-text-field>

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
    {{editedItem}}
  </v-form>

</template>

<script>

export default {
    name: "RegistraHora",
    props: {
        headers: { type: Array, required: true },
        defaultItem: { type: Object, required: true },
        fnCommit: { type: Function, required: false },
        fnReset: { type: Function, required: false }
    },
    data () {
        return {
            menu:false,
            editedItem: null
        }
    },
    created () {
        this.resetForm()
    },
    methods: {
        commitReg () {
            if ( this.fnCommit ) {
                this.fnCommit(this.editedItem).then(
                    this.resetForm()
                )
            }
        },
        resetForm () {
            this.editedItem = Object.assign({}, this.defaultItem)
        },
        classDef (type) {
            if ( type === 'date') return ['xs12','sm2'];
            if ( type === 'time') return ['xs6','sm1'];
            return ['xs12','sm2'];
        }
    }
}
</script>

<style>

</style>
