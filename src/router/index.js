import Vue from 'vue'
import VueRouter from 'vue-router'
import Ponto from '@/components/ponto/Ponto'
import Modelo from '@/components/modelos/Modelo'
import Atendimento from '@/components/atendimentos/Atendimento'

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
        path: '/controle-horas/atendimentos',
        name: 'Atendimentos',
        component: Atendimento,
        icon: 'work',
    },
    {
        path: '/controle-horas/modelo',
        name: 'Modelo',
        component: Modelo,
        icon: 'bubble_chart',
    }
]
export default new VueRouter({
    mode: "history",
    linkActiveClass: "active",
    routes
});