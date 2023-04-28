import {createRouter, createWebHistory, Router, RouteRecordRaw} from 'vue-router'
import Dashboard from '@b/views/Dashboard.vue'
import Auth from '@b/views/Auth/Auth.vue'
import Mobile from '@b/views/Auth/Mobile.vue'
import Verify from '@b/views/Auth/Verify.vue'
import Password from '@b/views/Auth/Password.vue'
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
                name: 'auth-mobile',
                component: Mobile
            },
            {
                path: 'verify',
                name: 'auth-verify',
                component: Verify
            },
            {
                path: 'password',
                name: 'auth-password',
                component: Password
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
