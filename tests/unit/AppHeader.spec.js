import { shallowMount, mount } from '@vue/test-utils'

import AppHeader from '@/components/template/AppHeader'
import AppFooter from '@/components/template/AppFooter'

import Ponto from '@/components/ponto/Ponto'
import App from '@/App'
import ListaPonto from '@/components/ponto/ListaPonto'
import RegistraPonto from '@/components/ponto/RegistraPonto'

import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify);

describe('AppHeader', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(AppHeader)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

describe('AppFooter', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(AppFooter)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

describe('Ponto', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Ponto)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

describe('ListaPonto', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(ListaPonto)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

describe('App', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(App)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

describe('RegistraPonto', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(RegistraPonto)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
