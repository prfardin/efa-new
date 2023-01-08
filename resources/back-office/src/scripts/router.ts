import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@b/views/Dashboard.vue'
import Register from '@b/views/Auth/Register.vue'
// must remove
import About from '@b/views/About.vue'

const routes = [
    { path: '/', component: Dashboard },
    { path: '/about', component: About },
    { path: '/register', component: Register },
]

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: "uk-active",
    linkExactActiveClass: "uk-active",
    routes
})

export default router
