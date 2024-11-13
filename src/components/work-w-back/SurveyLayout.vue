<script>
import UserExperiences from "@/components/work-w-back/UserExperiences.vue";
import LearningSurvey from "@/components/work-w-back/LearningSurvey.vue";

export default {
  name: "SurveyLayout",
  components: {LearningSurvey, UserExperiences}
}
</script>

<template>

  <div>
    <learning-survey></learning-survey>
    <user-experiences></user-experiences>
  </div>
  <router-link to="/back/friends"> Friends</router-link>
  <router-view></router-view>
</template>

<style scoped>

</style>