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
    }
});

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app')
