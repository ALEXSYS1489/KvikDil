import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    editTask: null,
  },
  getters: {
    getTasks(state) {
      return state.tasks;
    },
    getEditTask(state) {
      return state.editTask;
    },
  },
  mutations: {
    SET_TASKS(state, payload) {
      state.tasks = payload;
    },
    SET_EDITTASK(state, payload) {
      state.editTask = payload;
    },
  },
  actions: {},
});
