<template>
    <div class="ponto">
        <RegistraPonto></RegistraPonto>

        <ListaPonto></ListaPonto>        
    </div>    
</template>

<script>
import RegistraPonto from '@/components/ponto/RegistraPonto'
import ListaPonto from '@/components/ponto/ListaPonto'

export default {
  name: 'Ponto',
  components: {
    RegistraPonto,
    ListaPonto
    
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
    div.ponto {
        margin-left: 10px;
        margin-right: 10px
    }
</style>
