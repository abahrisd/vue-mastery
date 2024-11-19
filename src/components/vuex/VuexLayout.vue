<script>
import BaseContainer from "@/components/UI/BaseContainer.vue";
import TheCounter from "@/components/vuex/TheCounter.vue";
import ChangeCounter from "@/components/vuex/ChangeCounter.vue";
import FavoriteValue from "@/components/vuex/FavoriteValue.vue";
import UserAuth from "@/components/vuex/UserAuth.vue";
import {mapGetters} from "vuex";

export default {
  name: "VuexLayout",
  components: {UserAuth, FavoriteValue, ChangeCounter, TheCounter, BaseContainer},
  computed: {
    ...mapGetters(['userIsAuthenticated']),
  },
  methods: {
    addOne() {
      // this.$store.commit('increase', {value: 10});
      this.$store.dispatch({
        type: 'counter/increaseAction',
        value: 10,
      });
    }
  }
}
</script>

<template>
  <base-container title="Vuex" v-if="userIsAuthenticated">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="addOne">Add 10</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<style scoped>

</style>