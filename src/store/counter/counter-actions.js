const counterActions = {
  incrementAction(context) {
    setTimeout(() => {
      context.commit("increment")
    }, 1000)
  },
  increaseAction(context, payload) {
    setTimeout(() => {
      context.commit("increase", payload)
    }, 500)
  },
};

export {
  counterActions,
}