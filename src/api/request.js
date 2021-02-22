import axios from 'axios'
import router from '@/router/index.js'

const instance = axios.create({
	baseURL: 'https://www.fastmock.site/mock/32026ad0f5f184aae656d043e485e47d/api_mtmall',
	timeout: 10000,
})

function request (config) {
	instance.interceptors.request.use(
		config => {
			if (config.headers.needToken) {
				let token = localStorage.getItem('login_token')
				if (token) {
					config.headers.authorization = token
				} else {
					throw Error('请先登录')
				}
			}
			return config
		}
	)
	instance.interceptors.response.use(
		res => {
			return res
		},
		error => {
			if (error.response) {
				console.log('服务端错误');
				if (router.route.path !== '/login') {
					router.replace('/login')
				}
			} else {
				console.log('客户端错误');
				if (router.route.path !== '/login') {
					router.replace('/login')
				}
			}
			return new Promise(() => { })
		}
	)
	return instance(config)
}
export default request
