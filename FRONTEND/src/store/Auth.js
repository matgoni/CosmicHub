import axios from 'axios';
import router from '../router';

const state = {
    token: localStorage.getItem('token') || '',
    user: {},
    status: '',
    error: null
};

const getters = {
    isLoggedIn: state => !!state.token,
    authState: state => state.status,
    user: state => state.user,
    error: state => state.error
};

const actions = {
    async login({ commit }, user) {
        commit('auth_request');
        try {
            let res = await axios.post('http://localhost:8000/api/v1/login', user);
            if (res && res.data && res.data.success) {
                const { token, user } = res.data;
                localStorage.setItem('token', token);
                axios.defaults.headers.common['Authorization'] = token;
                commit('auth_success', token, user);
            } else {
                commit('auth_error', { message: "Error en el inicio de sesión." });
            }
        } catch (err) {
            commit('auth_error', err);
        }
    },

    async register({ commit }, userData) {
        commit('register_request');
        try {
            let res = await axios.post('http://localhost:8000/api/v1/register', userData);
            if (res && res.data && res.data.success) {
                commit('register_success');
            } else {
                commit('register_error', { message: "Error en el registro." });
            }
        } catch (err) {
            commit('register_error', err);
        }
    },

    async logout({ commit }) {
        await localStorage.removeItem('token');
        commit('logout');
        delete axios.defaults.headers.common['Authorization'];
        router.push('/login');
    }
};

const mutations = {
    auth_request(state) {
        state.error = null;
        state.status = 'loading';
    },
    auth_success(state, token, user) {
        state.token = token;
        state.user = user;
        state.status = 'success';
        state.error = null;
    },
    auth_error(state, err) {
        state.error = err.response && err.response.data.msg ? err.response.data.msg : (err.message || 'Error de autenticación');
        state.token = '';
        state.user = {};
    },
    register_request(state) {
        state.error = null;
        state.status = 'loading';
    },
    register_success(state) {
        state.error = null;
        state.status = 'success';
    },
    register_error(state, err) {
        state.error = err.response && err.response.data.msg ? err.response.data.msg : (err.message || 'Error en el registro');
    },
    logout(state) {
        state.token = '';
        state.user = {};
        state.status = '';
        state.error = null;
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};
