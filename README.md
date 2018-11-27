# Controle de Horas Trabalhadas

Controle de ponto e horas de atendimento.

Projeto que utilizo para estudar desenvolvimento Web.


## Stack atual:
 - Backend:
    - Firebase Cloud Firestore

 - Front-End:
    - Vue JS
    - Vuex
    - Vuetify
    - Vuefire (para conectar ao Firebase)

 - Testes:
    - Vue Test Utils
    - Jest

 - Dependências:
    - Vuetify Loader

 - Deploy/Host
    - Git Hub Pages
    - push-dir


## Project setup
```
npm install
```

### Configure Firebase
Copy db.example.js to db.js, and modify config const
```
// src\config\db.js
const configdb = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};

export default configdb;
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Deploy to GH-Pages with push-dir
```
npm run deploy
```

### Run your tests

``` language:javascript
npm run test
```

### Lints and fixes files

``` language:javascript
npm run lint
```

## Todo List

- [ ] Criar DashBoard com os totais
- [ ] Criar campos para filtro da lista por data
- [ ] Criar testes dos componenetes para eliminar os modelos
- [ ] Documentar Stack utilizada
- [ ] Arrumar menu
- [ ] App com Vue native
- [ ] Coleção e componente para previsão da folha
- [ ] Criar coleção para configurações, adicionar a tolerancia de 10 minutos para o ponto
- [ ] Melhorar visual
- [ ] Ponto: Ao alterar data, carregar do banco caso já existir na collection (unique key)
- [ ] Ponto: Carregar o objeto com a data de hoje, se já existir
- [ ] Ponto: Descobrir pq com enter recarrega a table e com o botão não
- [X] Vue testes
- [X] Componentizar melhor os elementos, para tornar testáveis
- [X] Criar Rotas
- [X] Criar componente e coleção para registro de OS
- [X] Separar as movimentações do backend em outro arquivo
- [X] Ajustar campo hora do Registro ponto
- [X] Converter para hora decimal
- [X] Calcular e mostrar total de horas
