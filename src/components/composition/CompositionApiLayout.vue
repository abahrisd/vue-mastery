<script>
import {reactive, ref, isReactive, isRef, toRefs, computed, provide} from "vue";
import UserData from "@/components/composition/UserData.vue";
import {useRoute, useRouter} from "vue-router";
import TheCounterComp from "@/components/composition/TheCounterComp.vue";
import ControlCenter from "@/components/composition/ControlCenter.vue";

export default {
  name: "CompositionApiLayout",
  components: {ControlCenter, TheCounterComp, UserData},
  props: ['cid'],
  setup(props) {
    // const userName = ref('Samir');
    const userAge = ref(36);
    // const user = ref({
    //   name: 'Samir',
    //   age: 36,
    // })
    // const age = ref(36);

    // console.log('isRef age',isRef(age));
    // console.log('isReactive user',isReactive(user));

    const user = reactive({
      name: 'Samir',
      // age: 36,
    });

    // setTimeout(() => {
    //   user.name = 'Sam';
    // }, 2000);

    const userRefs = toRefs(user);

    function setNewAge() {
      userAge.value = 37;
      // user.age = 37;
    }

    // inputs
    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);
    const setLastName = () => {
      lastName.value = lastNameInput.value.value;
    }
    const userName = computed(() => {
      return firstName.value + ' ' + lastName.value;
    });

    provide('userAge', userAge);


    // router

    const route = useRoute();
    const router =  useRouter();

    // const cid = computed(() => props.cid);
    const cid = computed(() => route.params.cid);
    const nextCidRoute = computed(() => {
      return '/composition-api/' + (Number(cid.value) + 1);
    });

    const goToNextCid = () => {
      router.push(nextCidRoute.value);
    };

    return {
      // userName: user.value.name,
      // age: user.value.age,
      user,
      name: userRefs.name,
      age: userAge.value,
      setAge: setNewAge,
      setLastName,
      firstName,
      lastName,
      userName,
      lastNameInput,
      cid,
      nextCidRoute,
      goToNextCid,
    };
  }
}
</script>

<template>
  <section class="cont">
    <h2>Route cid is {{cid}}</h2>
    <button @click="goToNextCid">Go to next cid route</button>
    <router-link :to="nextCidRoute">Go to next cid route</router-link>
    <user-data :first-name="firstName" :last-name="lastName" ></user-data>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>

  <section class="cont">
    <the-counter-comp></the-counter-comp>
    <control-center></control-center>
  </section>
</template>

<style scoped>
.cont {
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
</style>