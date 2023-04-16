import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@b/views/Dashboard.vue'
import Auth from '@b/views/Auth/Auth.vue'
// must remove
import About from '@b/views/About.vue'

const routes = [
    { path: '/', component: Dashboard },
    { path: '/:id', component: Dashboard },
    { path: '/about', component: About },
    { path: '/register', component: Auth },
]

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: "uk-active",
    linkExactActiveClass: "uk-active",
    routes
})

export default router
