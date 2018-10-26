
import { shallowMount } from '@vue/test-utils'

import App from '@/components/template/App'


describe('App', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})