// Build something cool. <3
import { createApp } from 'vue'
import App from '@f/App.vue'

// import Uikit
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons';

// loads the Icon plugin
UIkit.use(Icons);

createApp(App).mount('#app')
