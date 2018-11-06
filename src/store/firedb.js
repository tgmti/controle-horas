
import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

import configdb from '@/config/db'

Vue.use(VueFire)

export const COLLECTION_PONTO = 'ponto'

firebase.initializeApp(configdb)
export const db = firebase.firestore()

db.settings({
    timestampsInSnapshots: true
})
