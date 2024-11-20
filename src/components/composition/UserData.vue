<script>
import {computed} from "vue";

export default {
  component: 'UserData',
  props: ['firstName', 'lastName', 'age'],
  setup(props) {
    const userName = computed(() => {
      return props.firstName + ' ' + props.lastName;
    });

    return {
      userName,
    }
  },
}
</script>

<template>
<h2>{{userName}}</h2>
<h2>{{age}}</h2>
</template>

<style scoped>

</style>