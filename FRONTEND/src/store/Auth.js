import axios from 'axios';
import router from '../router';

const state = {
    token: localStorage.getItem('token') || '',
    user: {},
    status: '',
    error: {}
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
            if (res.data.success) {
                const token = res.data.token;
                const user = res.data.user;
                // Store the token into the localstorage
                localStorage.setItem('token', token);
                // Set the axios defaults
                axios.defaults.headers.common['Authorization'] = token;
                commit('auth_success', token, user);
            } 
            return res;
        } catch (err) {
            commit('auth_error', err);
        }
    },

    async register({ commit }, userData) {
        try {
            commit('register_request');
            let res = await axios.post('http://localhost:8000/api/v1/register', userData);
            if (res && res.data && res.data.success) {
                commit('register_success');
            } else {
                // Manejar casos donde el registro no es exitoso pero no hay un error de red
                commit('register_error', { message: res.data.message, errorCode: res.data.errorCode });
            }
            return res;
        } catch (err) {
            // Manejar errores de red o de servidor
            commit('register_error', { message: err.message, response: err.response });
        }
    },

    async logout({
        commit
    }) {
        await localStorage.removeItem('token');
        commit('logout');
        delete axios.defaults.headers.common['Authorization'];
        router.push('/login');
        return
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
        state.error = err.response && err.response.data && err.response.data.msg ? err.response.data.msg : (err.message || 'Error de autenticación');
        state.token = '';
        state.user = {};
    },
    register_request(state) {
        state.error = {}; // Reiniciar a un objeto vacío
        state.status = 'loading';
    },
    register_success(state) {
        state.error = {};
        state.status = 'success';
    },
    register_error(state, { message, errorCode, response }) {
        state.error = {
            general: message,
            errorCode: errorCode,
        };
        if (response && response.data) {
            state.error.server = response.data.msg || "Error en el servidor";
        }
        state.status = 'error';
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
