/**
 * router/index.ts
 *
 */

// Composables
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { useAuthStore } from '@/stores/authStore.js';
import { useAlertStore } from '@/stores/alertStore.js';

import HomePage from '@/views/HomePage.vue'
import RankingPage from '@/views/RankingPage.vue'
import SchedulePage from '@/views/SchedulePage.vue'
import TeamsPage from '@/views/TeamsPage.vue'
import TeamPage from '@/views/TeamPage.vue'
import AdminPage from '@/views/AdminPage.vue'
import SignInPage from '@/views/SignInPage.vue'
const router = createRouter({
  history: createWebHashHistory(),
  // routes: setupLayouts(routes),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: RankingPage,
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: SchedulePage,
    },
    {
      path: '/teams',
      name: 'teams',
      component: TeamsPage,
    },
    {
      path: '/team',
      name: 'team',
      component: TeamPage,
    },
    {
      path: '/admin-panel',
      name: 'admin-panel',
      component: AdminPage,
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: SignInPage,
    },
    { path: '/:pathMatch(.*)*', redirect: '/' }
    
  ],
});

router.beforeEach(async (to) => {
  // clear alert on route change
  const alertStore = useAlertStore();
  alertStore.clear();

  // redirect to login page if not logged in and trying to access a restricted page 
  const privatePages = ['/admin-panel'];
  const authRequired = privatePages.includes(to.path);
  const authStore = useAuthStore();

  if (authRequired && !authStore.user) {
      authStore.returnUrl = to.fullPath;
      return '/sign-in';
  }
});
export default router;

