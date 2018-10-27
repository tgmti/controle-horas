
import { shallowMount } from '@vue/test-utils'
import AppHeader from '@/components/template/AppHeader'

describe('AppHeader', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(AppHeader)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})