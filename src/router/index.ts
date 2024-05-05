import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router'
import Dashboard from '@v/Dashboard.vue'

// we use dynamic import
// which lazy-loaded when the route is visited.
const routes: RouteRecordRaw[] = [
  { path: '/', component: Dashboard },
  { path: '/:id', component: Dashboard },
  { path: '/about', component: () => import('@v/About.vue') }, // must remove
  {
    path: '/register',
    component: () => import('@v/Auth/Auth.vue'),
    children: [
      {
        path: '',
        name: 'auth-mobile',
        component: () => import('@v/Auth/Mobile.vue')
      },
      {
        path: 'verify',
        name: 'auth-verify',
        component: () => import('@v/Auth/Verify.vue')
      },
      {
        path: 'password',
        name: 'auth-password',
        component: () => import('@v/Auth/Password.vue')
      }
    ]
  },
  {
    path: '/services',
    component: () => import('@v/services/Services.vue'),
    children: [
      {
        path: 'business-type',
        name: 'businessType',
        component: () => import('@v/services/BusinessType.vue')
      },
      {
        path: 'business-details',
        name: 'businessDetails',
        component: () => import('@v/services/BusinessDetails.vue')
      },
      {
        path: 'business-organization',
        name: 'businessOrganization',
        component: () => import('@v/services/BusinessOrganization.vue')
      },
      {
        path: 'personal-details',
        name: 'personalDetails',
        component: () => import('@v/services/PersonalDetails.vue')
      }
    ]
  }
]

const router: Router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'uk-active',
  linkExactActiveClass: 'uk-active',
  routes
})

export default router
