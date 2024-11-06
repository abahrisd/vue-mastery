<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 'kolya',
        name: 'Super Kolya',
        phone: '999 88 99',
        email: 'kolya@gmail.com',
      }
    }
  }
}

</script>

<template>
  <li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailsAreVisible">
      <li>Phone: {{friend.phone}}</li>
      <li>Email: {{friend.email}}</li>
    </ul>
  </li>
</template>

<style scoped>

</style>