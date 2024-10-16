import {createApp} from 'vue'
import App from './App.vue'
import router from './router/index.js';

import {IonicVue} from '@ionic/vue';

// Vuetify
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
/* Axios */
import axios from 'axios';
import store from "@/store/index.js";

const vuetify = createVuetify({
    components,
    directives,
})


axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const app = createApp(App)
    .use(IonicVue)
    .use(vuetify)
    .use(router)
    .use(store)

router.isReady().then(() => {
    app.mount('#app');
});