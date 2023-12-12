import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import Astronautas from '../views/AstronautasView.vue';
import EstacionEspacial from '../views/EstacionView.vue';
import LanzamientosEspaciale from 'LanzamientsoView.vue';
import Tienda from 'TiendaView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Astronautas',
    name: 'Astronautas',
    component: Astronautas,
  },
  {
    path: '/EstacionEspacial',
    name: 'EstacionEspacial',
    component: EstacionEspacial,
  },
  {
    path: '/LanzamientosEspaciales',
    name: 'LanzamientosEspaciales',
    component: LanzamientosEspaciales,
  },
  {
    path: 'Tienda',
    name: 'Tienda',
    component: Tienda,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;