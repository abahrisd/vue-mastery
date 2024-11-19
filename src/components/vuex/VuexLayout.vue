<script>
import BaseContainer from "@/components/UI/BaseContainer.vue";
import TheCounter from "@/components/vuex/TheCounter.vue";

export default {
  name: "VuexLayout",
  components: {TheCounter, BaseContainer},
  methods: {
    addOne() {
      this.$store.state.counter++;
    }
  }
}
</script>

<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <button @click="addOne">Add 1</button>
  </base-container>
</template>

<style scoped>

</style>