import { createRouter, createWebHistory } from 'vue-router'
import Home from '@b/views/Dashboard.vue'
import About from '@b/views/About.vue'
import Register from '@b/views/Auth/Register.vue'

const routes = [
    { path: '/', component: Home },
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
