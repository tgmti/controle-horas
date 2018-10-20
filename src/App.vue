<template>
  <v-app dark >
      <AppHeader></AppHeader>

      <v-content>
        <Ponto></Ponto>

        <h2>TODO:</h2>
        <ul>
          <li>Lista de apontamenntos</li>
          <li><a href="https://vuetifyjs.com/pt-BR/components/data-tables#examples">data-tables</a></li>
          <li>Separar componente</li>
          <li>Adicionar ao dar enter</li>
          <li>Conectar com o <a href="https://app.prisma.io/pfinance/services/prisma-us1/pfinance/dev/databrowser/User">prisma</a></li>
          <li>Calcular total de horas</li>
          <li>Converter para hora decimal</li>
          <li>Criar DashBoard com os totais</li>
        </ul>

      </v-content>

      <AppFooter></AppFooter>

  </v-app>
</template>

<script>
import AppHeader from './components/template/AppHeader'
import AppFooter from './components/template/AppFooter'
import Ponto from './components/ponto/Ponto'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    Ponto
  },
  data () {
    return {}
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>