import Vue from 'vue'
import VueRouter from 'vue-router'
import Firebase from 'firebase'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home, // El component llama al componente importado
  },
  {
    path: '/login',
    name: 'Login',
    alias: ['/autenticacion', '/usuario'],
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/apod',
    name: 'Apod',
    component: () => import(/* webpackChunkName: "Apod" */ '../views/Apod.vue'),
    alias: ['/busqueda', '/buscar'],
    meta: {
      requireLogin: true // El meta tiene relación con la función guardia (se representa con una respuesta booleana)
    }
  },
  {
    path: '/rover',
    name: 'Rover',
    component: () => import(/* webpackChunkName: "Rover" */ '../views/Rover.vue'),
    alias: ['/busqueda', '/buscar'],
    meta: {
      requireLogin: true // El meta tiene relación con la función guardia (se representa con una respuesta booleana)
    }
  },
  {
    path: '*', // Este tipo de path con asterisco se usa para generar un not found o error 404
    name: 'NotFound',
    component: () => import(/* webpackChunkName:"notfound" */ '../views/NotFound') //Jamas debe ir con espacios
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let user = Firebase.auth().currentUser;
  let authRequired = to.matched.some(route => route.meta.requireLogin)
  if(!user && authRequired) {
    next('login') 
  } else {
    next()
  }
})

export default router
