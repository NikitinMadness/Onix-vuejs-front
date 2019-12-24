import Vue from 'vue'
import VueRouter from 'vue-router'
import Activity from '@/components/navigation/Activity.vue'
import Calendar from '@/components/navigation/Calendar.vue'
import Files from '@/components/navigation/Files.vue'
import Kanban from '@/components/navigation/Kanban.vue'
import Tasks from '@/components/navigation/Tasks.vue'
import PageNotFound from '@/components/navigation/Erorr/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/tasks' },
  { path: '/tasks', component: Tasks },
  { path: '/kanban', component: Kanban },
  { path: '/activity', component: Activity },
  { path: '/calendar', component: Calendar },
  { path: '/files', component: Files },
  { path: '*', component: PageNotFound }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
