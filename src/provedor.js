import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const estado = {
  token: null,
  usuario: {},
};

const mutations = {
  DEFINIR_ACESSO(state, { token }) {
    state.token = token;
  },
  DEFINIR_USUARIO_LOGADO(state, { usuario }) {
    state.usuario = usuario;
  },
  DESLOGAR_USUARIO(state) {
    state.usuario = {};
    state.token = null;
  },
};

export default new Vuex.Store({
  state: estado,
  mutations,
});
