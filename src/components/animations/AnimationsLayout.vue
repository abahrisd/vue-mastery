<template>
  <div>
    <div class="container">
      <users-list></users-list>
    </div>
    <div class="container">
      <div :class="{animate: animatedBlock}" class="block"></div>
      <button @click="animateBlock">Animate</button>
    </div>
    <div class="container">
      <!--    <transition enter-to-class="..." enter-from-class="..." enter-active-class="...">-->
      <transition
          :css="false"
          @before-enter="beforeEnter"
          @before-leave="beforeLeave"
          @enter="enter"
          @after-enter="afterEnter"
          @leave="leave"
          @after-leave="afterLeave"
          @enter-cancelled="enterCancel"
          @leave-cancelled="leaveCancel"
      >
        <p v-if="paraIsVisible">This is only sometimes visible...</p>
      </transition>
      <button @click="toggleParagraph">Toggle Paragraph</button>
    </div>
    <div class="container">
      <transition name="fade-button" mode="out-in">
        <button @click="showUsrs" v-if="!usersAreVisible">Show Users</button>
        <button @click="hideUsrs" v-else>Hide Users</button>
      </transition>
    </div>
    <base-modal @close="hideDialog" :open="dialogIsVisible">
      <p>This is a test dialog!</p>
      <button @click="hideDialog">Close it!</button>
    </base-modal>
    <div class="container">
      <button @click="showDialog">Show Dialog</button>
    </div>
  </div>

</template>

<script>
import BaseModal from "@/components/UI/BaseModal.vue";
import UsersList from "@/components/animations/UsersList.vue";

export default {
  components: {UsersList, BaseModal},
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      paraIsVisible: false,
      usersAreVisible: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    beforeEnter(el) {
      console.log('beforeenter!',el)
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log('enter!', el)
      let round = 1;

      this.enterInterval = setInterval(() => {
        el.style.opacity = round*0.01;
        round++;

        if (round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },
    enterCancel(el) {
      console.log('enterCancel',el)
      clearInterval(this.enterInterval);
    },
    beforeLeave(el) {
      console.log('beforeLeave!',el)
      el.style.opacity = 1;
    },
    afterEnter(el) {
      console.log('afterEnter!', el)
    },
    leave(el, done) {
      console.log('leave!', el);
      let round = 1;

      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round*0.01;
        round++;

        if (round > 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
    },
    leaveCancel(el) {
      console.log('leaveCancel',el)
      clearInterval(this.leaveInterval);
    },
    afterLeave(el) {
      console.log('afterLeave!', el)
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    showUsrs() {
      this.usersAreVisible = true;
    },
    hideUsrs() {
      this.usersAreVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /*transition: transform 0.3s ease;*/
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  /*transform: translateX(-150px);*/
  animation: slide-scale 0.3s ease forwards;
}

/*.para-enter-active {
  animation: slide-scale 0.3s ease-out;
  transition: all 0.3s ease-in-out;
}

.para-leave-active {
  animation: slide-scale 0.3s ease-out;
  transition: all 0.3s ease-in-out;
}*/

.fade-button-enter-from, .fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-to, .fade-button-leave-from {
  opacity: 1;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}
.fade-button-leave-active {
  transition: opacity 0.3s ease-out;
}

@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-120px) scale(1.1);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}

</style>