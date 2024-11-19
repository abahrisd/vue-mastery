<script>
import BaseContainer from "@/components/UI/BaseContainer.vue";
import TheCounter from "@/components/vuex/TheCounter.vue";
import ChangeCounter from "@/components/vuex/ChangeCounter.vue";

export default {
  name: "VuexLayout",
  components: {ChangeCounter, TheCounter, BaseContainer},
  methods: {
    addOne() {
      this.$store.commit('increase', {value: 10});
    }
  }
}
</script>

<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <button @click="addOne">Add 10</button>
    <change-counter></change-counter>
  </base-container>
</template>

<style scoped>

</style>