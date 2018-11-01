import Vue from 'vue'
import VueRouter from 'vue-router'
import Ponto from '@/components/ponto/Ponto'
import ListaHorasTest from '@/components/ListaHoras/ListaHorasTest'

Vue.use(VueRouter);

export const routes = [
    {
        path: '/controle-horas/',
        name: 'Home',
        component: Ponto,
        icon: 'home',
    },
    
    {
        path: '/controle-horas/ponto',
        name: 'Ponto',
        component: Ponto,
        icon: 'timer',
    },
    {
        path: '/controle-horas/teste',
        name: 'ListaHorasTest',
        component: ListaHorasTest,
        icon: 'bubble_chart',
    }
]
export default new VueRouter({
    mode: "history",
    linkActiveClass: "active",
    routes
});