<script>
import {computed, inject, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated} from "vue";

export default {
  component: 'UserData',
  props: ['firstName', 'lastName'],
  setup(props, context) {
    const userName = computed(() => {
      return props.firstName + ' ' + props.lastName;
    });

    console.log('context',context);

    // context.emit('userData', userName); // same as this.$emit...

    const age = inject('userAge');

    onBeforeMount(() => {
      console.log('onBeforeMount',)
    })
    onMounted(() => {
      console.log('onMounted',)
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate',)
    })
    onUpdated(() => {
      console.log('onUpdated',)
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount',)
    })
    onUnmounted(() => {
      console.log('onUnmounted',)
    })

    return {
      userName,
      age,
    }
  },
}
</script>

<template>
  <div>
    <h2>{{userName}}</h2>
    <h3>{{age}}</h3>
  </div>
</template>

<style scoped>

</style>