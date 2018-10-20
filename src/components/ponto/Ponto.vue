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
        margin-left: 100px;
        margin-right: 100px
    }
</style>
