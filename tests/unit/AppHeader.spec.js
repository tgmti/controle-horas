import { shallowMount, mount } from '@vue/test-utils'

import ListaPonto from '@/components/ponto/ListaPonto'
import ApontaAtendimento from '@/components/atendimentos/ApontaAtendimento'
import AppHeader from '@/components/template/AppHeader'
import AppFooter from '@/components/template/AppFooter'

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

describe('ApontaAtendimento', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(ApontaAtendimento)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

describe('ListaPonto', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ListaPonto)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})