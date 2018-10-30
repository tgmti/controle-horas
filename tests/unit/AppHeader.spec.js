import { shallowMount } from '@vue/test-utils'

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
