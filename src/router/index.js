import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
	path: '/',
	redirect: '/login',
}, {
	path: '/home',
	name: 'Home',
	component: Home,
	meta: {
		isShowMainFooter: true
	}
}, {
	path: '/search',
	name: 'Search',
	component: () =>
		import('@/views/homes/Search.vue'),
	meta: {
		isShowMainFooter: true
	}
}, {
	path: '/order',
	name: 'Order',
	component: () =>
		import('@/views/Order.vue'),
	meta: {
		isShowMainFooter: true
	}
}, {
	path: '/profile',
	name: 'Profile',
	component: () =>
		import('@/views/Profile.vue'),
	meta: {
		isShowMainFooter: true
	}
}, {
	path: '/login',
	name: 'Login',
	component: () =>
		import('@/views/Login.vue')
}, {
	path: '/register',
	name: 'Register',
	component: () =>
		import('@/views/Register.vue')
}, {
	path: '/shop_detail',
	name: 'ShopDetail',
	component: () =>
		import('@/views/ShopDetail.vue'),
	children: [{
		redirect: 'food',
		path: '',
	}, {
		path: 'food',
		name: 'Food',
		component: () =>
			import('@/views/shop_detail/Food.vue')
	}, {
		path: '/shop_detail/rating',
		name: 'Rating',
		component: () =>
			import('@/views/shop_detail/Rating.vue')
	}, {
		path: 'info',
		name: 'Info',
		component: () =>
			import('@/views/shop_detail/Info.vue')
	}]
}]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
