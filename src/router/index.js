import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/Course',
    name: 'Course',
    component: () => import('@/views/Course.vue')
  },
  {
    path: '/Teacher',
    name: 'Teacher',
    component: () => import('@/views/Teacher.vue')
  },
  {
    path: '/CourseDetails',
    name: 'CourseDetails',
    component: () => import('@/views/CourseDetails.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
