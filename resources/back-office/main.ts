import './bootstrap';

import { createApp } from 'vue';
import router from '@bs/scripts/router';
import i18n from "@bs/scripts/i18n";

import App from '@b/App.vue';

import UIkit from 'uikit';
import Icons from '@bs/cache/uikit-icons';
UIkit.icon.add(Icons());

const app = createApp(App);

// uses: vue-router & vue-i18n
app.use(router);
app.use(i18n);

app.mount('#app');
