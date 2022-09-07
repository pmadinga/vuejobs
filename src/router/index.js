import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutViewVue from '../views/AboutView.vue'
import NotFound from '../views/NotFound.vue'
import JobsViewVue from '@/views/jobs/JobsView.vue'
import JobDetails from '@/views/jobs/JobDetails.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutViewVue,
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsViewVue
  },
  {
    path: '/jobs/:id',
    name: 'jobdetails',
    component: JobDetails,
    props: true
  },
  //all jhobs
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  // 404
  {
    path: '/:catchAll(.*)',
    name: 'notfound',
    component: NotFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
