<script>
import ErrorAlert from "@/components/ErrorAlert.vue";

export default {
  components: {
    ErrorAlert,
  },
  name: "ManageGoals",
  data() {
    return {
      inputIsInvalid: false,
      isOpened: true,
    }
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === '') {
        this.inputIsInvalid = true;
      }
    },
    confirmError() {
      this.inputIsInvalid = false;
    }
  }
}
</script>

<template>
  <div>
    <h2>Manage goals</h2>
    <input type="text" ref="goal">
    <button @click="setGoal">Set Goal</button>
    <error-alert v-if="inputIsInvalid">
      <h2>
       Input is invalid
      </h2>
      <button @click="confirmError">OK</button>
    </error-alert>
  </div>
</template>

<style scoped>

</style>