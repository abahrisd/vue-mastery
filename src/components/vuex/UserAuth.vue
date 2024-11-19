<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "UserAuth",
  computed: {
    ...mapGetters(['userIsAuthenticated']),
  },
  methods: {
    ...mapActions(['logoutAction', 'loginAction']),
  },
}
</script>

<template>
  <button @click="loginAction" v-if="!userIsAuthenticated">Login</button>
  <button @click="logoutAction" v-if="userIsAuthenticated">Logout</button>

</template>

<style scoped>

</style>