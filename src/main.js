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
    scrollBehavior: (to, from, savedPosition) => {
        if (savedPosition) {
            return savedPosition;
        }

        return {
            left: 0,
            top: 0,
        }
    },
});

router.beforeEach((to, from, next) => {
    console.log('router',{to, from});
    next();
    // next(false);
    // next({name: 'my-route-name', params: {...}});
})
const app = createApp(App);

app.use(router);

app.mount('#app')
