import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'



Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:"/basic",
    name:"VueBasic",
    component: ()=> import('../views/VueBasic'),
    children:[
      {
        path:"tltdemo",
        name:"tltdemo",
        component:  ()=> import('../components/VueBasic/TPLdemo.vue'),
      },
      {
        path:"computedDemo",
        name:"computedDemo",
        component:  ()=> import('../components/VueBasic/ComputedDemo.vue'),
      },
      {
        path:"watchDemo",
        name:"watchDemo",
        component:  ()=> import('../components/VueBasic/WatchDemo.vue'),
      },
      {
        path:"classDemo",
        name:"classDemo",
        component:  ()=> import('../components/VueBasic/ClassDemo.vue'),
      }
    ]
  },

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
