import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SubjectNews from '../views/SubjectNews.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home-item',
    component: Home
  },
  {
    path: '/subject/:id',
    name: 'subject',
    component: SubjectNews
  },
  {
    path: '/login',
    name: 'login-item',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router