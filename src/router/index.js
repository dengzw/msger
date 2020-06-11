import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexPage from '@/views/index.vue'
const Hello = () => import('@/views/hello/index.vue')
const Home = () => import('@/views/home/index.vue')
const coffeeMap = () => import('@/views/map/map.vue')
const Msger = () => import('@/views/msger/index.vue')
const Coding = () => import('@/views/coding/index.vue')
const About = () => import('@/views/about/index.vue')
const Setting = () => import('@/views/setting/index.vue')
const Chat = () => import('@/views/chat/index.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/index',
    name: 'Index',
    component: IndexPage,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/map',
        name: 'Map',
        component: coffeeMap
      },
      {
        path: '/coding',
        name: 'Coding',
        component: Coding
      },

      {
        path: '/msger',
        name: 'Msger',
        component: Msger
      },
      {
        path: '/chat',
        name: 'Chat',
        component: Chat
      },
      {
        path: '/setting',
        name: 'Setting',
        component: Setting
      },
      {
        path: '/about',
        name: 'About',
        component: About
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
