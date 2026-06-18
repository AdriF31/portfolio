import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Projects from './pages/Projects.vue'
import ProjectDetail from './pages/ProjectDetail.vue'

export const router = createRouter({
  history: createWebHistory('/portfolio/'),
  routes: [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/projects/:slug', component: ProjectDetail },
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})
