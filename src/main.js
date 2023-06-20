import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router/index';
import store from './store/store';
import appTask from './components/appTask.vue';
import appTasks from './components/appTasks.vue';
import editTask from './components/editTask.vue';

Vue.component('appTask', appTask);
Vue.component('appTasks', appTasks);
Vue.component('editTask', editTask);
Vue.use(VueRouter);

new Vue({
  render: (h) => h(App),
  el: '#app',
  router,
  store,
}).$mount('#app');
