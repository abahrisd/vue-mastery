import { createApp } from "vue"
import App from "./App.vue"
import router from "@/router.js"
import store from "@/store";
import loggerMixin from './components/mixins-ccf/mixins/logger.js';

const app = createApp(App)

app.use(router)
app.use(store)

app.mixin(loggerMixin);

app.mount("#app")
