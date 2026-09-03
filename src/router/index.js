import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    { path: '/', component: () => import('../views/HomeView.vue') },
    { path: '/projects', component: () => import('../views/ProjectsView.vue') },
    { path: '/projects/:id', component: () => import('../views/ProjectDetail.vue') },
    { path: '/about', component: () => import('../views/AboutView.vue') },
    { path: '/certificates', component: () => import('../views/CertificatesView.vue') },
    { path: '/contact', component: () => import('../views/ContactView.vue') },
  ],
})