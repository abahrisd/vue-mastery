const counterGetters = {
  // Will not work coz state in module is local, instead use rootState
  // testAuth(state) {
  //   return state.isLoggedIn;
  // },
  testAuth(state, getters, rootState, rootGetters) {
    return rootState.isLoggedIn
  },
  finalCounter(state, getters) {
    return state.counter * 2
  },
  counter(state) {
    return state.counter;
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
};

export {
  counterGetters,
}