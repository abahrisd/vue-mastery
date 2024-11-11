<script>
export default {
  name: "MyGoals",
  data() {
    return {
      goals: ['Goal 1', 'Goal 2'],
    }
  }
}
</script>

<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :item="goal"></slot>
    </li>
  </ul>

</template>

<style scoped>

</style>