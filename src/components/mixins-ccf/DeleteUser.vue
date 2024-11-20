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
import alertMixin from "@/components/mixins-ccf/mixins/alert.js";

export default {
  components: {
    UserAlert,
  },
  data() {
    return {
      alertTitle: 'Delete user?',
    }
  },
  mixins: [alertMixin],
};
</script>