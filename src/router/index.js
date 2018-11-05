import Vue from 'vue'
import VueRouter from 'vue-router'
import Ponto from '@/components/ponto/Ponto'
import ListaHorasModelo from '@/components/ListaHoras/ListaHorasModelo'

Vue.use(VueRouter);

export const routes = [
    {
        path: '/controle-horas/', 
        name: 'Home',
        icon: 'home',
        redirect: '/controle-horas/ponto'
    },
    
    {
        path: '/controle-horas/ponto',
        name: 'Ponto',
        component: Ponto,
        icon: 'timer',
    },
    {
        path: '/controle-horas/ListaHorasModelo',
        name: 'ListaHorasModelo',
        component: ListaHorasModelo,
        icon: 'bubble_chart',
    }
]
export default new VueRouter({
    mode: "history",
    linkActiveClass: "active",
    routes
});