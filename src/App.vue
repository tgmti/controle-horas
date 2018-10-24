<template>
  <v-app dark >
      <AppHeader></AppHeader>

      <v-content>
        <Ponto></Ponto>

        <h2>TODO:</h2>
        <ul>
          <li>Calcular total de horas</li>
          <li>Converter para hora decimal</li>
          <li>Criar DashBoard com os totais</li>
          <li>Criar Rotas e arrumar menu</li>
          <li>Criar componente e coleção para registro de OS</li>
          <li>Host</li>
          <li>App com react native</li>
          <li>Coleção e componente para previsão da folha</li>
        </ul>

      </v-content>

      <AppFooter></AppFooter>

  </v-app>
</template>

<script>
import AppHeader from './components/template/AppHeader'
import AppFooter from './components/template/AppFooter'
import Ponto from './components/ponto/Ponto'

import store from './store'

export default {
  name: 'App',
  store,
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