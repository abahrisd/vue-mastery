<script>
  import TheNavigation from "@/components/nav/TheNavigation.vue";

  export default {
    components: {
      TheNavigation,
    },
    data() {
      return {
        fancyText: 'Super fancy text',
      }
    },
    provide() {
      return {
        fancyText: this.fancyText,
      }
    }
  }
</script>

<template>
  <nav>
    <the-navigation></the-navigation>
  </nav>
  <main>
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
