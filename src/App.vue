<script>
  export default {
    data() {
      return {
        friends: [
          {
            id: 'Kolya',
            name: 'Super Kolya',
            phone: '999 88 99',
            email: 'kolya@gmail.com',
          }
        ]
      }
    },
    methods: {

    },
    computed: {

    },
  }
</script>

<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <friend-contact></friend-contact>
      <friend-contact></friend-contact>
    </ul>
  </section>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

</style>
