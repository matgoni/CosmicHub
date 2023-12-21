import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import Astronautas from '../views/AstronautasView.vue';
import EstacionEspacial from '../views/EstacionView.vue';
import Lanzamientos from '../views/LanzamientosView.vue';
import Tienda from '../views/TiendaView.vue';
import Login from '../views/LoginView.vue';
import Registro from '../views/RegistroView.vue';
import store from '../store/index.js';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/Astronautas',
    name: 'Astronautas',
    component: Astronautas,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/EstacionEspacial',
    name: 'EstacionEspacial',
    component: EstacionEspacial,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/Lanzamientos',
    name: 'Lanzamientos',
    component: Lanzamientos,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/Tienda',
    name: 'Tienda',
    component: Tienda,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/Registro',
    name: 'Registro',
    component: Registro,
    meta: {
      requiresGuest: true
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      // Redirect to the Login Page
      next('/login');
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (store.getters.isLoggedIn) {
      // Redirect to the Login Page
      next('/movies');
    } else {
      next();
    }
  } else {
    next()
  }
});

export default router;