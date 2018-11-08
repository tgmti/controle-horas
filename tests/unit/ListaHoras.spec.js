import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuetify from 'vuetify'

import ListaHoras from '@/components/template/ListaHoras'

const localVue = createLocalVue()

localVue.use(Vuetify);

const title = "Lista Horas Modelo"

const headers = [
    { text: 'Data'      , value: 'data', align: 'left' },
    { text: 'Entrada'   , value: 'ent1' }
]

const items = [{ data:'2018-09-20', ent1: '11:58' },{ data:'2018-09-20', ent1: '11:59' }]

const dummyFunc = (function () {return true;})

let wrapper

describe('ListaHoras', () => {
  test('is a Vue instance', () => {
    wrapper = shallowMount(ListaHoras, {
        localVue,
        propsData: {
            title,
            headers,
            items,
            fnLoadReg: dummyFunc,
            fnDelete: dummyFunc
        }
    })
    wrapper.element
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
describe('ListaHoras', () => {
  test('is title props correct', () => {
    expect(wrapper.props().title).toEqual(title)
  })
})

