import Vue from 'vue'
import Router from 'vue-router'
import notFound from '@/components/notFound'

Vue.use(Router)
const List = () => import('@/components/List');
const Shop = () => import('@/components/Shop');
const Home = () => import('@/components/Home');
const Comand = () => import('@/components/Comand');
const Single = () => import('@/components/Single');
const Login = () => import('@/components/Login');
const Users = () => import('@/self/Users');
const Mself=()=>import('@/self/Mself')
const Dai=()=>import('@/self/Dai')
const Lister=()=>import('@/self/Lister')
const Yonghu=()=>import('@/components/Yonghu')
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        keepAlive: true
      }
    }, {
      path: '/List',
      name: 'List',
      component: List
    },
    {
      path: '/Shop',
      name: 'Shop',
      component: Shop
    }, {
      path: '/Comand',
      name: 'Comand',
      component: Comand,
      children: [
        {
          path: 'Users',
          component: Users,
        },
        {
          path: 'Dai',
          component: Dai,
          meta:{
            keepAlive:true //需要被缓存的组件
          },
        },
        {
          path: 'Mself',
          component: Mself,
        },
        {
          path:'Lister',
          component: Lister,
        },
        {
          path:'Yonghu',
          component: Yonghu,
        }

      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }, {
      path: '/Single/:id',
      name: 'Single',
      component: Single
    },

    {
      path: "/404",
      name: "notFound",
      component: notFound
    }, {
      path: "*", // 此处需特别注意置于最底部
      redirect: "/404"
    }

  ]
})
