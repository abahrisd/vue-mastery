const rootActions = {
  loginAction(context) {
    context.commit("setAuth", { isAuth: true })
  },
  logoutAction(context) {
    context.commit("setAuth", { isAuth: false })
  },
};

export {
  rootActions,
}