<script>
import BaseContainer from "@/components/UI/BaseContainer.vue";
import { mapGetters } from 'vuex';

export default {
  name: "TheCounter",
  components: {BaseContainer},
  computed: {
    ...mapGetters(['finalCounter']),
    // counter() {
    //   return this.$store.getters.finalCounter;
    // }
  },
}
</script>

<template>
  <h3>{{finalCounter}}</h3>
</template>

<style scoped>

</style>