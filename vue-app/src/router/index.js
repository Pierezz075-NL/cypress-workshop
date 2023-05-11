import { createRouter, createWebHistory } from 'vue-router'
import AddUser from '../views/AddUser.vue'
import OverviewUsers from '../views/OverviewUsers.vue'
import Rainbow from '../views/testing/TestRainbow.vue'
import Shapes from '../views/testing/TestShapes.vue'

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
    },
    {
      path: '/rainbow',
      name: 'rainbow',
      component: Rainbow,
    },
    {
      path: '/shapes',
      name: 'shapes',
      component: Shapes,
    }
  ]
})

export default router
