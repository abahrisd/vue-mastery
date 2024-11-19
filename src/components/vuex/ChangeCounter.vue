<script>
import {mapActions} from "vuex";

export default {
  name: "ChangeCounter",
  methods: {
    ...mapActions(['increaseAction']),
  }
}
</script>

<template>
  <button @click="increaseAction({value: 2})">Add 2</button>
</template>

<style scoped>

</style>