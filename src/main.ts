/**
 * we use type-based declaration for components props
 * cause type-based declaration is straightforward and can be extended
 * but type-based declaration has cons and
 * the generic argument itself passed to defineProps cannot be an imported type
 * but this limitation will be removed in future release,
 * so we define all props in util/props.ts, and we ready for
 * vue release to clean our code
 */

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import i18n from './scripts/i18n'

import App from './App.vue'

import UIkit from 'uikit'
import Icons from '@t/uikit-icons'
UIkit.icon.add(Icons())

const app = createApp(App)

// uses: vue-router & vue-i18n
app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
