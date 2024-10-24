import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CharactersView from '../views/CharactersView.vue';
import FavoritesView from '../views/FavoritesView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',name: 'home', component: HomeView, meta: { title: 'Home' } },
    { path: '/character', name: 'character', component: () => import('../views/CharactersView.vue'), meta: { title: 'Characters' } },
    { path: '/favorites', name: 'favorites', component: () => import('../views/FavoritesView.vue'), meta: { title: 'Favorites' } },
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router
