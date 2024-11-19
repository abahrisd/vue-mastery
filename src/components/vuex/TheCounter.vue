<script>
import BaseContainer from "@/components/UI/BaseContainer.vue";

export default {
  name: "TheCounter",
  components: {BaseContainer},
  computed: {
    counter() {
      return this.$store.getters.finalCounter;
    }
  },
}
</script>

<template>

  <h3>{{counter}}</h3>
</template>

<style scoped>

</style>