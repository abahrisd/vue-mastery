<template>
  <user-alert v-if="alertIsVisible" title="Delete the User?" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>{{alertTitle}}</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import UserAlert from './UserAlert.vue';
import useAlert from './hooks/alert';
import {ref} from "vue";

export default {
  components: {
    UserAlert,
  },
  setup() {
    const alertTitle = ref('Delete user?');
    // better than mixins, more straightforward, easier to customise
    const [alertIsVisible, showAlert, hideAlert] = useAlert(false);

    return {
      alertIsVisible,
      showAlert,
      hideAlert,
      alertTitle,
    }
  },
};
</script>