import { createStore } from 'vuex';
import Auth from './Auth.js';

export default createStore({
  state: {
    user: {
      id: '',
      email: '',
    },
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Auth
  },
});