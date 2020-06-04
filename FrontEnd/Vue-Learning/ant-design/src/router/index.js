import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
     path:"/user",
     //jsx和template本质都是转换成render函数
     //h可以理解为createElement()
     //render:function(createElement)
     //render:function(h) return h()
     component:()=> import(/* webpackChunkName: "layout" */ "../layouts/UserLayout"),
     chidren:[
       {
         path:'/user',
         redirect:"/user/login"
       },
       {
         path:'/user/login',
         name:'login',
         component:()=> import(/* webpackChunkName: "about" */ "../views/User/Login")
       },
       {
        path:'/user/register',
        name:'register',
        component:()=> import(/* webpackChunkName: "about" */ "../views/User/Register")
      }
     ]
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
