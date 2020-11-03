import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Informative from '../views/site/InformativeManagerPage.vue';
import MedicalRecords from '../views/site/MedicalRecordsManagerPage.vue';
import HealthAgent from '../views/site/HealthAgentManagerPage.vue';
import Register from '../views/site/RegisterPage.vue';
import Login from '../views/site/LoginPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/informative',
    name: 'Informative',
    component: Informative,
  },
  {
    path: '/user',
    name: 'MedicalRecords',
    component: MedicalRecords,
  },
  {
    path: '/health-agent',
    name: 'HealthAgent',
    component: HealthAgent,
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('../views/site/PrivacyPage.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
