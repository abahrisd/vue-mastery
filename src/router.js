import { createRouter, createWebHistory } from "vue-router"

const TheForm = () => import("./components/form/TheForm.vue");
const FormFooter = () => import("./components/form/FormFooter.vue");
const SurveyLayout = () => import("./components/work-w-back/SurveyLayout.vue");
const BackFooter = () => import("./components/work-w-back/BackFooter.vue");
const FriendsList = () => import("./components/FriendsList.vue");
const NotFound = () => import("./components/nav/NotFound.vue");
const AnimationsLayout = () => import("./components/animations/AnimationsLayout.vue");
const VuexLayout = () => import("./components/vuex/VuexLayout.vue");

const router = createRouter({
  routes: [
    {
      path: "/",
      redirect: "/form",
    },
    {
      // alias: '/',
      path: "/form",
      // meta: {needsAuth: true},
      components: {
        default: TheForm,
        footer: FormFooter,
      },
    },
    {
      path: "/animations",
      components: {
        default: AnimationsLayout,
      },
    },
    {
      path: "/vuex",
      components: {
        default: VuexLayout,
      },
    },
    {
      path: "/back",
      components: {
        default: SurveyLayout,
        footer: BackFooter,
      },
      children: [
        {
          name: "back-friends",
          path: "friends",
          component: FriendsList,
        },
      ],
    },
    {
      path: "/:catchAll(.*)",
      component: NotFound,
    },
  ],
  history: createWebHistory(),
  linkActiveClass: "active",
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    }

    return {
      left: 0,
      top: 0,
    }
  },
})

router.beforeEach((to, from, next) => {
  console.log("router", { to, from })
  if (to.meta.needsAuth) {
    console.log("need auth!")
    // next(false);
    next()
  } else {
    next()
  }
  // next(false);
  // next({name: 'my-route-name', params: {...}});
})

export default router
