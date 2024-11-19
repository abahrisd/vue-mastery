import { createStore } from "vuex"

import {counterModule} from "./counter";

import {rootMutations} from "./mutations.js";
import {rootActions} from "./actions.js";
import {rootGetters} from "./getters.js";


const store = createStore({
  modules: {
    counter: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    }
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
})

export default store;