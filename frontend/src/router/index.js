import Vue from 'vue';
import VueRouter from 'vue-router';
import AuthLayout from '@/layouts/AuthLayout.vue';
import MainLayout from '@/layouts/MainLayout.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/Home.vue'),
      },
    ],
  },
  {
    path: '',
    component: AuthLayout,
    children: [
      {
        path: '/signup',
        name: 'SignUp',
        component: () => import('../views/auth/SignUp.vue'),
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('../views/auth/Login.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
