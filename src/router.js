import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/shops',
      name: 'shops',
      component: () => import('./views/Shops.vue')
    },
    {
      path: '/restaurants',
      name: 'restaurants',
      component: () => import('./views/Restaurants.vue')
    },
    {
      path: '/places',
      name: 'places',
      component: () => import('./views/Places.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
