import {createRouter, createWebHistory} from 'vue-router'
const Login = ()=> import ('@/components/login/login.vue')
const Layout =()=>import('@/view/Layout/index.vue')
const routes = [
  {
    path:'/',
    redirect:'/login'
  },
  {
    path:'/login',
    component: Login
  },
  {
    path:'/home',
    component:Layout
  }
]
 const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
}) 
export default router