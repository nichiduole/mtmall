import {
	reqHome
} from '@/api/home.js'
import {
	SET_HOME
} from './mutationsName'
export default {
	getHome ({
		commit
	}) {
		reqHome().then(res => {
			console.log('数据请求成功');
			commit(SET_HOME, res)
		})
			.catch(err => {
				return new Promise(() => { })
			})
	},
}
