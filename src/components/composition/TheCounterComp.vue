<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  setup() {
    const store = useStore();

    const counter = computed(() => store.getters['counter/counter']);

    return {
      counter
    }
  }
}
</script>

<template>
  <div>
    <h2>{{counter}}</h2>
  </div>
</template>

<style scoped>

</style>