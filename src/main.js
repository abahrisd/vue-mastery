import { createApp } from 'vue'
import App from './App.vue'
import FriendContact from './components/FriendContact.vue'
import NewFriend from "@/components/NewFriend.vue";
import {createRouter, createWebHistory} from 'vue-router';
import TheForm from "@/components/form/TheForm.vue";
import SurveyLayout from "@/components/work-w-back/SurveyLayout.vue";

const router = createRouter({
    routes: [{
        path: '/form',
        component: TheForm,
    },{
        path: '/back',
        component: SurveyLayout,
    },],
    history: createWebHistory(),
});
const app = createApp(App);


app.component('friend-contact', FriendContact);
app.component('new-friend', NewFriend);

app.use(router);

app.mount('#app')
