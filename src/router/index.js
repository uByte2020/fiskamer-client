import Vue from 'vue'
import VueRouter from 'vue-router'
import { Home, Cadastra, Login, About, DetalheServico, Search } from '../views'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/detalhe-servico',
    name: 'detalhe-servico',
    component: DetalheServico,
    props: true 
  },
  {
    path: '/cadastrar',
    name: 'cadastrar',
    component: Cadastra,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/search',
    name: 'search',
    component: Search,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
