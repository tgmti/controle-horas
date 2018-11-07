<template>
    <div class="atendimento">
        <ApontaAtendimento></ApontaAtendimento>

        <ListaHorasAtendimento></ListaHorasAtendimento>
    </div>    
</template>

<script>
import ListaHorasAtendimento from '@/components/atendimentos/ListaHorasAtendimento'
import ApontaAtendimento from '@/components/atendimentos/ApontaAtendimento'

export default {
  name: 'Atendimento',
  components: {
    ListaHorasAtendimento,
    ApontaAtendimento
  }
}
</script>

<style scoped>
    div.atendimento {
        margin-left: 10px;
        margin-right: 10px
    }
</style>
