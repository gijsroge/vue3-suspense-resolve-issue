import { createRouter, createWebHistory } from 'vue-router'
import first from '@/views/first.vue'
import second from '@/views/second.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'first',
      path: '/',
      component: first,
    },
    {
      name: 'second',
      path: '/second',
      component: second,
    },
  ],
})
