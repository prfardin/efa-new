import {createRouter, createWebHistory, Router, RouteRecordRaw} from 'vue-router'
import Dashboard from '@b/views/Dashboard.vue'
import Auth from '@b/views/Auth/Auth.vue'
import Register from '@b/views/Auth/Register.vue'
import Verify from '@b/views/Auth/Verify.vue'
import Services from '@b/views/services/Services.vue'

// must remove
import About from '@b/views/About.vue'

const routes: RouteRecordRaw[] = [
    { path: '/', component: Dashboard },
    { path: '/:id', component: Dashboard },
    { path: '/about', component: About },
    {
        path: '/register',
        component: Auth,
        children: [
            {
                path: '',
                name: 'register',
                component: Register
            },
            {
                path: 'verify',
                component: Verify
            }
        ]
    },
    { path: '/services', component: Services },
]

const router: Router = createRouter({
    history: createWebHistory(),
    linkActiveClass: "uk-active",
    linkExactActiveClass: "uk-active",
    routes
})

export default router
