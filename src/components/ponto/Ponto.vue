<template>
    <div class="ponto">
        <RegistraPonto></RegistraPonto>

        <ListaPonto></ListaPonto>        
    </div>    
</template>

<script>
import RegistraPonto from './RegistraPonto'
import ListaPonto from './ListaPonto'

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
