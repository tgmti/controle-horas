<template>
    <div class="content">
        <RegistraHoraModelo></RegistraHoraModelo>

        <ListaHorasModelo></ListaHorasModelo>        
    </div>    
</template>

<script>
import RegistraHoraModelo from '@/components/modelos/RegistraHoraModelo'
import ListaHorasModelo from '@/components/modelos/ListaHorasModelo'

export default {
  name: 'Modelo',
  components: {
    RegistraHoraModelo,
    ListaHorasModelo
    
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
    div.content {
        margin-left: 10px;
        margin-right: 10px
    }
</style>
