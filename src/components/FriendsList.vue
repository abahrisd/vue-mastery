<script>
import MyGoals from "@/components/MyGoals.vue";
import FriendContact from "@/components/FriendContact.vue";
import NewFriend from "@/components/NewFriend.vue";
import ActiveGoals from "@/components/ActiveGoals.vue";
import ManageGoals from "@/components/ManageGoals.vue";

export default {
  name: "FriendsList",
  components: {NewFriend, FriendContact,
    MyGoals,
    ActiveGoals,
    ManageGoals,},
  data() {
    return {
      selectedComponent: 'active-goals',
      fancyText: 'Super fancy text',
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
    },
    addContact(name, phone, email) {
      this.friends.push({
        id: new Date().toISOString(),
        name,
        phone,
        email,
      });
    },
    deleteContact(friendId) {
      this.friends = this.friends.filter(f => f.id !== friendId);
    },
    setSelectedComponent(cpmName) {
      this.selectedComponent = cpmName;
    },
  },
}
</script>

<template>
  <section>
    <new-friend @add-contact="addContact"></new-friend>
  </section>
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
          @delete-friend="deleteContact"
      ></friend-contact>
      <my-goals #default="slotProps">
        <h2>{{slotProps.item}}</h2>
      </my-goals>

      <button @click="setSelectedComponent('active-goals')">Active goals</button>
      <button @click="setSelectedComponent('manage-goals')">Manage goals</button>
      <keep-alive>
        <component :is="selectedComponent"></component>
      </keep-alive>
    </ul>
  </section>
</template>

<style scoped>

</style>