import { createRouter, createWebHistory } from 'vue-router';

import Cuaca from '../components/Cuaca.vue';
import Photo from '../components/Photo.vue';
import Game from '../components/Game.vue';
import Lokasi from '../components/Lokasi.vue';

const routes = [
  { path: '/', component: Cuaca },
  { path: '/photo', component: Photo },
  { path: '/game', component: Game},
  { path: '/lokasi', component: Lokasi },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;