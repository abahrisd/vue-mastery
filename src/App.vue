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
            isFavorite: true,
          },
          {
            id: 'Kolya 2',
            name: 'Super Kolya',
            phone: '555 55 55',
            email: 'kolya2@gmail.com',
            isFavorite: true,
          },
        ]
      }
    },
    methods: {
      toggleFavoriteStatus(friendId) {
        const friend = this.friends.find(f => f.id === friendId);
        friend.isFavorite = !friend.isFavorite;
      }
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
          v-for="friend in friends"
          :key="friend.id"
          :id="friend.id"
          :name='friend.name'
          :phone='friend.phone'
          :email-address='friend.email'
          v-bind:is-favorite="friend.isFavorite"
          v-on:toggle-favorite="toggleFavoriteStatus"
      ></friend-contact>
<!--      <friend-contact-->
<!--          name='Super Kolya'-->
<!--          phone='999 88 99'-->
<!--          email-address='kolya@gmail.com'-->
<!--          v-bind:is-favorite="true"-->
<!--      ></friend-contact>-->
<!--      <friend-contact-->
<!--          name='Super Kolya 2'-->
<!--          phone='999 88 99 3'-->
<!--          email-address='kolya@gmail.com 4'-->
<!--          :is-favorite="false"-->
<!--      ></friend-contact>-->
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
