import Vue from 'vue'
import VueRouter from 'vue-router'
import { Home, Cadastra, Login, About, DetalheServico, Search } from '../views'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/detalhe-servico',
    name: 'detalhe-servico',
    component: DetalheServico,
  },
  {
    path: '/Cadastrar',
    name: 'Cadastrar',
    component: Cadastra,
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/Search',
    name: 'Search',
    component: Search,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
