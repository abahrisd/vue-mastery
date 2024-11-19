import { createApp } from "vue"
import App from "./App.vue"
import router from "@/router.js"
import { createStore } from "vuex"

const counterModule = {
  namespaced: true,
  state() {
    return {
      counter: 0,
    }
  },
  mutations: {
    increment(state) {
      // BAD PRACTICE, NEVER SHOULD BE DONE, use actions instead
      // setTimeout(() => {
      //     state.counter += 1;
      // }, 200);
      state.counter += 1
    },
    increase(state, payload) {
      state.counter += payload.value
    },
  },
  actions: {
    incrementAction(context) {
      setTimeout(() => {
        context.commit("increment")
      }, 1000);
    },
    increaseAction(context, payload) {
      setTimeout(() => {
        context.commit("increase", payload)
      }, 500);
    },
  },
  getters: {
    // Will not work coz state in module is local, instead use rootState
    // testAuth(state) {
    //   return state.isLoggedIn;
    // },
    testAuth(state, getters, rootState, rootGetters) {
      return rootState.isLoggedIn;
    },
    finalCounter(state, getters) {
      return state.counter * 2
    },
    normalizedCounter(state, getters) {
      const finalCounter = getters.finalCounter

      if (finalCounter < 0) {
        return 0
      }

      if (finalCounter > 100) {
        return 100
      }

      return finalCounter
    },
  },
}

const store = createStore({
  modules: {
    counter: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    }
  },
  mutations: {
      setAuth(state, payload) {
        state.isLoggedIn = payload.isAuth;
      },
  },
  actions: {
      loginAction(context) {
          context.commit("setAuth", {isAuth: true});
      },
      logoutAction(context) {
          context.commit("setAuth", {isAuth: false});
      }
  },
  getters: {
      userIsAuthenticated(state, getters) {
        return state.isLoggedIn;
      }
  },
})

const app = createApp(App)

app.use(router)
app.use(store)

app.mount("#app")
