<script>
export default {
  name: "ChangeCounter",
  methods: {
    addOne() {
      this.$store.commit({
        type: 'increase',
        value: 2,
      });
    }
  }
}
</script>

<template>
  <button @click="addOne">Add 2</button>
</template>

<style scoped>

</style>