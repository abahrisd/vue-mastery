<script>
import BaseContainer from "@/components/UI/BaseContainer.vue";
import TheCounter from "@/components/vuex/TheCounter.vue";
import ChangeCounter from "@/components/vuex/ChangeCounter.vue";
import FavoriteValue from "@/components/vuex/FavoriteValue.vue";

export default {
  name: "VuexLayout",
  components: {FavoriteValue, ChangeCounter, TheCounter, BaseContainer},
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
    <favorite-value></favorite-value>
    <button @click="addOne">Add 10</button>
    <change-counter></change-counter>
  </base-container>
</template>

<style scoped>

</style>