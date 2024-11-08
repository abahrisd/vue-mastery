<script>
export default {
  name: "NewFriend",
  emits: ['add-contact'],
  data() {
    return {
      enteredName: '',
      enteredPhone: '',
      enteredEmail: '',
    };
  },
  methods: {
    submitData() {
      this.$emit('add-contact', this.enteredName, this.enteredPhone, this.enteredEmail);
    }
  }
}
</script>

<template>
  <form @submit.prevent>
    <div>
      <label for="name">Name</label>
      <input type="text" v-model="enteredName">
    </div>
    <div>
      <label for="phone">phone</label>
      <input type="text" v-model="enteredPhone">
    </div>
    <div>
      <label for="email">email</label>
      <input type="text" v-model="enteredEmail">
    </div>

    <button @click="submitData">Add friend</button>

  </form>
</template>

<style scoped>

</style>