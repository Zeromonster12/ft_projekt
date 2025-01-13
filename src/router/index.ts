import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import GamesView from '@/views/GamesView.vue';
import CartView from '@/views/CartView.vue';
import GameDetailView from '@/views/GameDetailView.vue';
import OrdersView from '@/views/OrdersView.vue';

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
    name: 'GameDetailView',
    component: GameDetailView,
    props: true,
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView,
  },
  {
    path: '/orders',
    name: 'orders',
    component: OrdersView,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'home' },
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;