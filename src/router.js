import { createRouter, createWebHistory } from 'vue-router';

import ArtistDetail from './pages/artists/ArtistDetail.vue';
import ArtistMain from './pages/artists/ArtistMain.vue';
import ArtistSignup from './pages/artists/ArtistSignup.vue';
import ContactArtist from './pages/requests/ContactArtist.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/artists' },
    { path: '/artists', component: ArtistMain },
    {
      path: '/artists/:id',
      component: ArtistDetail,
      children: [
        { path: 'contact', component: ContactArtist } 
      ]
    },
    { path: '/signup', component: ArtistSignup },
    { path: '/requests', component: RequestsReceived },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;
