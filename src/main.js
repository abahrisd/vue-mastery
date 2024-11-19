import { createApp } from "vue"
import App from "./App.vue"
import router from "@/router.js"
import { createStore } from "vuex"

const store = createStore({
  state() {
    return {
      counter: 0,
        isLoggedIn: false,
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
      setAuth(state, payload) {
        state.isLoggedIn = payload.isAuth;
      },
  },
  actions: {
    incrementAction(context) {
        setTimeout(() => {
            context.commit("increment")
        }, 2000);
    },
    increaseAction(context, payload) {
        setTimeout(() => {
            context.commit("increase", payload)
        }, 1000);
    },
      loginAction(context) {
          context.commit("setAuth", {isAuth: true});
      },
      logoutAction(context) {
          context.commit("setAuth", {isAuth: false});
      }
  },
  getters: {
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
      userIsAuthenticated(state, getters) {
        return state.isLoggedIn;
      }
  },
})

const app = createApp(App)

app.use(router)
app.use(store)

app.mount("#app")
