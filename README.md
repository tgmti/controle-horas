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
```
npm run test
```

### Lints and fixes files
```
npm run lint
```


## Todo List

 - [ ] Vue testes
 - [ ] Documentar Stack utilizada
 - [ ] Calcular total de horas
 - [ ] Converter para hora decimal
 - [ ] Criar DashBoard com os totais
 - [ ] Criar Rotas e arrumar menu
 - [ ] Criar componente e coleção para registro de OS
 - [ ] App com Vue native
 - [ ] Coleção e componente para previsão da folha
 - [ ] Ajustar campo hora do Registro ponto
 - [ ] Criar coleção para configurações, adicionar a tolerancia de 10 minutos para o ponto
 - [ ] Melhorar visual
 - [ ] Separar as movimentações do backend em outro arquivo
 - [ ] Ponto: Ao alterar data, carregar do banco caso já existir na collection (unique key)
 - [ ] Ponto: Carregar o objeto com a data de hoje, se já existir
 - [ ] Ponto: Descobrir pq com enter recarrega a table e com o botão não

