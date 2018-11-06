<template>

    <RegistraHora 
        :headers="headers"
        :defaultItem="defaultItem"
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
    computed: {
        ...mapState({
            headers: state => state.ponto.headers,
            defaultItem: state => state.ponto.defaultItem(),
        })
    },
    created () {
        //this.$store.dispatch('ponto/get');
    }
}
</script>

<style>

</style>
