import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import GamesView from '@/views/GamesView.vue';
import CartView from '@/views/CartView.vue';
import GameDetails from '@/components/Game.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/games',
    name: 'games',
    component: GamesView,
  },
  {
    path: '/games/:id',
    name: 'GameDetails',
    component: GameDetails,
    props: true,
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;