const counterMutations = {
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
};

export {
  counterMutations,
}