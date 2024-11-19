import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router.js";
import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            counter: 0,
        };
    },
    mutations: {
        increment(state) {
            state.counter += 1;
        },
        increase(state, payload) {
            state.counter += payload.value;
        },
    },
    getters: {
        finalCounter(state, getters) {
            return state.counter * 2;
        },
        normalizedCounter(state, getters) {
            const finalCounter = getters.finalCounter;

            if (finalCounter < 0) {
                return 0;
            }

            if (finalCounter > 100) {
                return 100;
            }

            return finalCounter
        }
    }
});

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app')
