
import { shallowMount } from '@vue/test-utils'

import AppFooter from '@/components/template/AppFooter'


describe('AppFooter', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(AppFooter)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})