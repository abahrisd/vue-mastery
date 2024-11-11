<script>
import FancyText from './FancyText.vue';
import Slots from "@/components/Slots.vue";

export default {
  // props: [
  //   'name',
  //   'phone',
  //   'emailAddress',
  //   'isFavorite',
  // ],
  components: {
    'fancy-text-local': FancyText,
    Slots,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    emailAddress: String,
    isFavorite: {
      type: Boolean,
      required: false,
      default: function() {
        return false;
      },
      // default: '0',isFavorite
      validator: function(value) {
        return ['1', '0'].includes(value);
      }
    },
  },
  emits: ['toggle-favorite', 'delete-friend'],
  // emits: {
  //   'toggle-favorite': function (id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       console.warn('Id is missed');
  //       return false;
  //     }
  //   }
  // },
  data() {
    return {
      detailsAreVisible: false,
      // friend: {
      //   id: 'kolya',
      //   name: 'Super Kolya',
      //   phone: '999 88 99',
      //   email: 'kolya@gmail.com',
      // }
      // friendIsFavorite: this.isFavorite,
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    // Bad, breaks unidirectional data flow
    // toggleFavorite() {
    //   if (this.isFavorite === '1') {
    //     this.isFavorite = '0'
    //   } else {
    //     this.isFavorite = '1';
    //   }
    // }
    // in case we need to modify props from within of component
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id);
    },
    deleteFriend() {
      this.$emit('delete-friend', this.id);
    }
  }
}

</script>

<template>
  <li>
    <h2>{{name}} {{isFavorite ? '(Favorite)' : '' }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="deleteFriend">Delete</button>
    <ul v-if="detailsAreVisible">
      <li>Phone: {{phone}}</li>
      <li>Email: {{emailAddress}}</li>
      <fancy-text-local />
    </ul>
    <Slots>
      <template v-slot:default>Base slot data</template>
      <template v-slot:header>Header</template>
    </Slots>
  </li>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0.5rem;
  background-color: #880017;
  color: white;
  text-align: center;
  margin-bottom: 2rem;
}

section {
  width: 90%;
  max-width: 40rem;
  margin: auto;
}

.healthbar {
  width: 100%;
  height: 40px;
  border: 1px solid #575757;
  margin: 1rem 0;
  background: #fde5e5;
}

.healthbar__value {
  background-color: #00a876;
  width: 100%;
  height: 100%;
}

.container {
  text-align: center;
  padding: 0.5rem;
  margin: 1rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
}

#monster h2,
#player h2 {
  margin: 0.25rem;
}

#controls {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

button {
  font: inherit;
  border: 1px solid #88005b;
  background-color: #88005b;
  color: white;
  padding: 1rem 2rem;
  border-radius: 12px;
  margin: 1rem;
  width: 12rem;
  cursor: pointer;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

button:focus {
  outline: none;
}

button:hover,
button:active {
  background-color: #af0a78;
  border-color: #af0a78;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.26);
}

button:disabled {
  background-color: #ccc;
  border-color: #ccc;
  box-shadow: none;
  color: #3f3f3f;
  cursor: not-allowed;
}

#log ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

#log li {
  margin: 0.5rem 0;
}

.log--player {
  color: #7700ff;
}

.log--monster {
  color: #da8d00;
}

.log--damage {
  color: red;
}

.log--heal {
  color: green;
}
</style>