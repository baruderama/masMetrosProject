import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Pokemon from '@/views/Pokemon.vue'
import Search from '../views/Search.vue'

const routes = [

  //Ruta a la vista en donde esta la lista de pokemones
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  //Ruta a la vista en donde se vera la informacion detallada del pokemon
  {
    path: '/pokemon/:pokemon',
    name: 'pokemon',
    component: Pokemon
  },

  //Ruta a la vista en donde aparecera la tarjeta/caja del pokemon que se consulto en la barra de busqueda 
  {
    path:'/search',
    name:'Search',
    component: Search
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
