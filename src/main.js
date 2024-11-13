import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router';
import TheForm from "@/components/form/TheForm.vue";
import SurveyLayout from "@/components/work-w-back/SurveyLayout.vue";
import FriendsList from "@/components/FriendsList.vue";
import NotFound from "@/components/nav/NotFound.vue";

const router = createRouter({
    routes: [
        {
            path: '/',
            redirect: '/form',
        },
        {
            // alias: '/',
            path: '/form',
            component: TheForm,
        }, {
            path: '/back',
            component: SurveyLayout,
            children: [
                {
                    path: 'friends',
                    component: FriendsList,
                }
            ]
        }, {
            path: '/:catchAll(.*)',
            component: NotFound,
        }
    ],
    history: createWebHistory(),
    linkActiveClass: 'active',
});
const app = createApp(App);

app.use(router);

app.mount('#app')
