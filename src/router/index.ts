import { createWebHistory, createRouter } from 'vue-router'

import Home from '@/views/Home.vue'
import Blog from '@/views/Blog.vue'
import BlogList from '@/views/BlogList.vue'
import Privacy from '@/views/Privacy.vue'
import Terms from '@/views/Terms.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/blog', component: Blog },
  { path: '/blog/:slug', component: BlogList },
  { path: '/privacy', component: Privacy },
  { path: '/terms', component: Terms },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router