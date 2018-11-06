<template>
    <div class="atendimento">
        <ListaHorasAtendimento></ListaHorasAtendimento>        
    </div>    
</template>

<script>
import ListaHorasAtendimento from '@/components/atendimentos/ListaHorasAtendimento'

export default {
  name: 'Atendimento',
  components: {
    ListaHorasAtendimento
  }
}
</script>

<style scoped>
    div.atendimento {
        margin-left: 10px;
        margin-right: 10px
    }
</style>
