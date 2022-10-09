import Vue from 'vue';

import VueRouter from 'vue-router';

import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    alias: '/home',
    component: HomeView,
    children:[
      {
        path: '', // default view
        name: 'Home',
        // meta: { requiresAuth: true },
        component: () =>
          import(/* webpackChunkName: "profile" */ '@/components/Home/index'),
      },
      {
        path: '/docs', // default view
        name: 'Docs',
        // meta: { requiresAuth: true },
        component: () =>
          import(/* webpackChunkName: "profile" */ '@/components/Home/docs'),
      },
      {
        path: '/api', // default view
        name: 'Api',
        // meta: { requiresAuth: true },
        component: () =>
          import(/* webpackChunkName: "profile" */ '@/components/Home/api'),
      },
      {
        path: '/about', // default view
        name: 'About',
        // meta: { requiresAuth: true },
        component: () =>
          import(/* webpackChunkName: "profile" */ '@/components/Home/about'),
      },
      {
        path: '/post', // default view
        name: 'Post',
        // meta: { requiresAuth: true },
        component: () =>
          import(/* webpackChunkName: "profile" */ '@/components/Home/post'),
      }
    ]
  },

  {
    path: "/error 404",
    name: "NotFound",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "NotFound" */ "@/views/NotFound.vue"),
  },
  {
    path: "*",
    redirect: { name: "NotFound" },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
