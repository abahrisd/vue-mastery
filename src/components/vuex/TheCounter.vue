<script>
import BaseContainer from "@/components/UI/BaseContainer.vue";
import { mapGetters } from 'vuex';

export default {
  name: "TheCounter",
  components: {BaseContainer},
  computed: {
    ...mapGetters('counter', ['finalCounter', 'testAuth']),
    // counter() {
    //   return this.$store.getters.finalCounter;
    // }
  },
}
</script>

<template>
  <h3>{{finalCounter}}</h3>
  <h2>Is auth: {{testAuth ? 'YES' : 'NO'}}</h2>
</template>

<style scoped>

</style>