<template>

    <RegistraHora 
        :headers="headers"
        :defaultItem="defaultItem"
        :editedItem="editedItem"
        :computedItem="computedItem"
        :fnCommit="fnSave"
    >
    </RegistraHora>

</template>

<script>

import { mapState } from 'vuex'
import RegistraHora from '@/components/template/RegistraHora'

export default {
    name: "ApontaAtendimento",
    components: {
            RegistraHora
    },
    data () {
        return {
            fnSave : (item) => this.$store.dispatch('atendimento/save', item),
            defaultItem: () => this.$store.dispatch('atendimento/reset'),
            computedItem: this.$store.getters
        }
    },
    computed: {
        ...mapState({
            headers: state => state.atendimento.headers,
            editedItem: state => state.atendimento.editedItem
        })
    }
}
</script>

<style>

</style>
