import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueFire)

const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};

firebase.initializeApp(config)

const db = firebase.firestore()

db.settings({
	timestampsInSnapshots: true
})

export default db

export const COLLECTION_PONTO = 'ponto'