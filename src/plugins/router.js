import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {path: '/', component: () => import('@/views/Home.vue')},
    {path: '/about', component: () => import('@/views/AboutUs.vue')},
    {path: '/contact', component: () => import('@/views/Contact.vue')},
    {path: '/ourservices', component: () => import('@/views/OurServices.vue')},
    {path: '/team', component: () => import('@/views/TeamPage.vue')},
    { path: '/:pathMatch(.*)*', component: () => import('@/views/NotFound.vue') }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router