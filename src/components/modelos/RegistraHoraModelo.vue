<template>

    <RegistraHora 
        :headers="headers"
        :defaultItem="defaultItem"
        :editedItem="editedItem"
        :fnCommit="fnSave"
    >
    </RegistraHora>

</template>

<script>

import { mapState } from 'vuex'
import RegistraHora from '@/components/template/RegistraHora'

export default {
    name: "RegistraHoraModelo",
    components: {
            RegistraHora
    },
    data () {
        return {
            fnSave : (item) => this.$store.dispatch('ponto/save', item),
            defaultItem: () => this.$store.dispatch('ponto/reset')
        }
    },
    computed: {
        ...mapState({
            headers: state => state.ponto.headers,
            editedItem: state => state.ponto.editedItem
        })
    }
}
</script>

<style>

</style>
