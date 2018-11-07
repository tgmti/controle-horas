<template>

    <RegistraHora 
        :headers="headers"
        :defaultItem="defaultItem"
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
            fnSave : (item) => this.$store.dispatch('ponto/save', item)
        }
    },
    computed: {
        ...mapState({
            headers: state => state.ponto.headers,
            defaultItem: state => state.ponto.defaultItem(),
        })
    }
}
</script>

<style>

</style>
