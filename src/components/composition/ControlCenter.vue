<script>
import { useStore } from "vuex"

export default {
  setup() {
    const store = useStore()

    function inc() {
      store.dispatch("counter/incrementAction")
    }

    return { inc }
  },
}
</script>

<template>
  <button @click="inc">Increment</button>
</template>

<style scoped></style>