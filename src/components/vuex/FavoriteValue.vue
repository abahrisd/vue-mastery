<script>
export default {
  name: "FavoriteValue",
  computed: {
    counter() {
      return this.$store.getters.normalizedCounter;
    }
  },
}
</script>

<template>
  <h3>{{counter}}</h3>
  <div>We do more...</div>
</template>

<style scoped>

</style>