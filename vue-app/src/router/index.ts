import { createRouter, createWebHistory } from 'vue-router'
import AddUser from '@/views/AddUser.vue'
import OverviewUsers from '@/views/OverviewUsers.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'add',
      component: AddUser,
    },
    {
      path: '/users',
      name: 'users',
      component: OverviewUsers,
    }
  ]
})

export default router
