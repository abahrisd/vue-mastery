import { createApp } from 'vue'
import App from './App.vue'
import FriendContact from './components/FriendContact.vue'
import NewFriend from "@/components/NewFriend.vue";
import FancyText from "@/components/FancyText.vue";

const app = createApp(App);

app.component('friend-contact', FriendContact);
app.component('new-friend', NewFriend);
app.component('fancy-text', FancyText);

app.mount('#app')
