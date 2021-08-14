import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showTranslation: false,
  },
  mutations: {
    setShowTranslation(state, payload) {
      state.showTranslation = payload;
    },
  },
  actions: {
    toggleTranslation({ commit, state }) {
      const showTranslation = !state.showTranslation;
      commit("setShowTranslation", showTranslation);
    },
  },
});
