import request from './request.js'

export const reqHome = () => {
	return request({
		url: '/home',
		headers: {
			needToken: true
		}
	})
}
