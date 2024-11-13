import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router';
import TheForm from "@/components/form/TheForm.vue";
import SurveyLayout from "@/components/work-w-back/SurveyLayout.vue";
import FriendsList from "@/components/FriendsList.vue";
import NotFound from "@/components/nav/NotFound.vue";
import FormFooter from "@/components/form/FormFooter.vue";
import BackFooter from "@/components/work-w-back/BackFooter.vue";

const router = createRouter({
    routes: [
        {
            path: '/',
            redirect: '/form',
        },
        {
            // alias: '/',
            path: '/form',
            components: {
                default: TheForm,
                footer: FormFooter,
            },
        }, {
            path: '/back',
            components: {
                default: SurveyLayout,
                footer: BackFooter,
            },
            children: [
                {
                    name: 'back-friends',
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
