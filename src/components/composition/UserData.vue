<script>
import {computed, inject} from "vue";

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