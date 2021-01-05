import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home',
}, {
    path: '/home',
    name: 'Home',
    component: Home
}, {
    path: '/search',
    name: 'Search',
    component: () =>
        import ('../views/Search.vue')
}, {
    path: '/order',
    name: 'Order',
    component: () =>
        import ('../views/Order.vue')
}, {
    path: '/profile',
    name: 'Profile',
    component: () =>
        import ('../views/Profile.vue')
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router