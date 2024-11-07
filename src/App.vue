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
      <friend-contact
          name='Super Kolya'
          phone='999 88 99'
          email-address='kolya@gmail.com'
      ></friend-contact>
      <friend-contact
          name='Super Kolya 2'
          phone='999 88 99 3'
          email-address='kolya@gmail.com 4'
      ></friend-contact>
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
