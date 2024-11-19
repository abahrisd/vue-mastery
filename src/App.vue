<script>
  import TheNavigation from "@/components/nav/TheNavigation.vue";
  import slots from "@/components/Slots.vue";

  export default {
    computed: {
      slots() {
        return slots
      }
    },
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
<!--      <router-view v-slot="slotProps">-->
<!--        <transition name="route" mode="in-out">-->
<!--          <component :is="slotProps.Component"></component>-->
<!--        </transition>-->
<!--      </router-view>-->

    <transition name="route" mode="in-out">
      <router-view></router-view>
    </transition>
    <router-view name="footer"></router-view>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.route-emter-from {

}
.route-enter-active {
  animation: fade 0.4s ease-out;
}
.route-leave-active {
  animation: fade 0.4s ease-in;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
