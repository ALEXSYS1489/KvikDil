import VueRouter from 'vue-router';

import MainPage from '../pages/MainPage.vue';
import TasksPage from '../pages/TasksPage.vue';

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: MainPage,
    },
    {
      path: '/tasks',
      component: TasksPage,
    },
  ],
});
