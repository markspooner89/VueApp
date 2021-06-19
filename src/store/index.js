import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    grades: [
      {
        id: 1,
        name: "White Belt",
      },
      {
        id: 2,
        name: "Yellow Tag",
      },
    ],
  },
  getters: {
    orderedGrades: (state) => {
      return state.grades.sort((a, b) => a.id - b.id);
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
