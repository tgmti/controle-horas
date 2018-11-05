import { createLocalVue, shallowMount, mount } from '@vue/test-utils'

import Vuetify from 'vuetify'

import AppHeader from '@/components/template/AppHeader'
import AppFooter from '@/components/template/AppFooter'

import App from '@/App'
import Ponto from '@/components/ponto/Ponto'
import ListaPonto from '@/components/ponto/ListaPonto'
//import RegistraPonto from '@/components/ponto/RegistraPonto'

import router from '@/router'
import store from '@/store'


const localVue = createLocalVue()

localVue.use(Vuetify);

describe('AppHeader', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(AppHeader, {localVue})
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
 
describe('AppFooter', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(AppFooter, {localVue})
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

describe('Ponto', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Ponto, {localVue})
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

describe('ListaPonto', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(ListaPonto, {localVue})
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

describe('App', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(App, {localVue, router, store})
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

/* describe('RegistraPonto', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(RegistraPonto, {localVue, router, store})
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
}) */
