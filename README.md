# controle-horas

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


## Todo List

 - [ ] Vue testes
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



## Project setup
```
npm install
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
