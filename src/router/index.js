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
    path: '/informativo',
    name: 'Informative',
    component: Informative,
  },
  {
    path: '/prontuario',
    name: 'MedicalRecords',
    component: MedicalRecords,
  },
  {
    path: '/agente-de-saude',
    name: 'HealthAgent',
    component: HealthAgent,
  },
  {
    path: '/privacidade',
    name: 'Privacy',
    component: () => import('../views/site/PrivacyPage.vue'),
  },
  {
    path: '/cadastro',
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
