//配置路由相关信息
import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>import('@/views/home/Home.vue')
const Category = () =>import('@/views//category/Category.vue')
const Cart = () =>import('@/views/cart/Cart.vue')
const Porfile = () =>import('@/views/profile/Porfile.vue')

//1.通过Vue.use（插件），安装插件
Vue.use(VueRouter)
//2.创建路由对象
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component:Home
  },
  {
    path: '/category',
    component:Category
  },
  {
    path: '/cart',
    component:Cart
  },
  {
    path: '/profile',
    component:Porfile
  }
]
//配置路由和组件之间的映射关系
const router = new VueRouter({
  routes, 
  mode:'history'
})

//3.导出router
export default router

