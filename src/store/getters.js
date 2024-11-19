const rootGetters = {
  userIsAuthenticated(state, getters) {
    return state.isLoggedIn
  },
};

export {
  rootGetters
}