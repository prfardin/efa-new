import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router'
import Dashboard from '@v/Dashboard.vue'

// we use dynamic import
// which lazy-loaded when the route is visited.
const routes: RouteRecordRaw[] = [
  { path: '/',
    component: Dashboard,
    children: [
      { path: '',
        component: () => import('@v/dashboard/index.vue')
      }
    ]
  },
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
        component: () => import('@v/services/BusinessType.vue'),
        meta: {
          header: "auth.step.two.description.header",
          comment_1: "auth.step.two.description.comment_1",
          comment_2: "auth.step.two.description.comment_2",
        }
      },
      {
        path: 'business-details',
        name: 'businessDetails',
        component: () => import('@v/services/BusinessDetails.vue'),
        meta: {
          header: "auth.step.three.description.header",
          comment_1: "auth.step.three.description.comment_1",
          comment_2: "auth.step.three.description.comment_2",
        }
      },
      {
        path: 'business-organization',
        name: 'businessOrganization',
        component: () => import('@v/services/BusinessOrganization.vue'),
        meta: {
          header: "auth.step.four.description.header",
          comment_1: "auth.step.four.description.comment_1",
          comment_2: "auth.step.four.description.comment_2",
        }
      },
      {
        path: 'personal-details',
        name: 'personalDetails',
        component: () => import('@v/services/PersonalDetails.vue'),
        meta: {
          header: "auth.step.five.description.header",
          comment_1: "auth.step.five.description.comment_1",
          comment_2: "auth.step.five.description.comment_2",
        }
      }
    ]
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('@v/settings/personalSettings.vue'),
    children: [
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
