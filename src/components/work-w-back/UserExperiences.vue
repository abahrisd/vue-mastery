<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExpiriences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="error">{{error}}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">No expiriences was found.</p>
      <ul v-else-if="!isLoading && results && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';
import BaseCard from "@/components/UI/BaseCard.vue";
import BaseButton from "@/components/UI/BaseButton.vue";

export default {
  // props: ['results'],
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    }
  },
  methods: {
    loadExpiriences() {
      this.isLoading = true;
      this.error = null;

      fetch('https://vue-http-e0b15-default-rtdb.firebaseio.com/surveys.json').then(response => {
        if (response.ok) {
          return response.json();
        }
      }).then(data => {
        const results = [];

        for (const id in data) {
          results.push({
            id,
            name: data[id].name,
            rating: data[id].rating,
          })
        }

        this.results = results;
      }).catch((error) => {
        this.error = 'Failed to fetch data';
      }).finally(() => {
        this.isLoading = false;
      });
    }
  },
  mounted() {
    this.loadExpiriences();
  },
  components: {
    BaseButton,
    BaseCard,
    SurveyResult,
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>