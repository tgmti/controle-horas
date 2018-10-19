<template>
  <v-app dark >
      <AppHeader></AppHeader>

      <v-content>
        <ApontaHora></ApontaHora>

        <ul>
          <li>Lista de apontamenntos</li>
          <li><a href="https://vuetifyjs.com/pt-BR/components/data-tables#examples">data-tables</a></li>
        </ul>

        <v-data-table
          :headers="headers"
          :items="desserts"
          hide-actions
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.calories }}</td>
            <td class="text-xs-right">{{ props.item.fat }}</td>
            <td class="text-xs-right">{{ props.item.carbs }}</td>
            <td class="text-xs-right">{{ props.item.protein }}</td>
            <td class="text-xs-right">{{ props.item.iron }}</td>
          </template>
          <template slot="no-data">
            <v-alert :value="true" color="error" icon="warning">
              Sorry, nothing to display here :(
            </v-alert>
          </template>
        </v-data-table>

      </v-content>

      <AppFooter></AppFooter>

  </v-app>
</template>

<script>
import AppHeader from './components/template/AppHeader'
import AppFooter from './components/template/AppFooter'
import ApontaHora from './components/ponto/ApontaHora'
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld,
    AppHeader,
    AppFooter,
    ApontaHora
  },
  data () {
    return {

       headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' }
        ],
        desserts: [ 
          {calories: 10, fat: 10, carbs: 10, protein: 10, iron : 20},
          {calories: 105, fat: 10, carbs: 10, protein: 10, iron : 20},
          {calories: 140, fat: 10, carbs: 10, protein: 10, iron : 20},
          {calories: 10, fat: 10, carbs: 10, protein: 10, iron : 20},
          {calories: 703, fat: 10, carbs: 10, protein: 10, iron : 20},
          {calories: 50, fat: 10, carbs: 10, protein: 10, iron : 20},
          {calories: 10, fat: 10, carbs: 10, protein: 10, iron : 20},
          {calories: 20, fat: 10, carbs: 10, protein: 10, iron : 20}
        ]

    }
  }
}
</script>
