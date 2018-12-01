import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Declarations from "../views/Declarations.vue"
import Creators from "../views/Creators.vue"
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"

Vue.use(Router)

function isAuth(to, from, next) {
  console.log(localStorage.getItem("user-login"));
  if (!localStorage.getItem("user-login")) {
    next();
  }
  else {
    next({
      path: '/',
      query: {
        redirect: to.fullPath,
      },
    });
  }
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Home
    },
    {
      path: '/Confesiones/:search',
      name: 'DeclarationsSearch',
      component: Declarations
    },
    {
      path: '/Confesiones',
      name: 'Declarations',
      component: Declarations
    },
  
    {
      path: '/IniciarSesion',
      name: 'Login',
      component: Login,
      beforeEnter: isAuth
    },
    {
      path: '/Registrarse',
      name: 'Register',
      component: Register,
      beforeEnter: isAuth
    }
  ]
})