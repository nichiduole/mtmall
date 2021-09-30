import {
	SET_HOME,
	SET_TOKEN,
	SET_PHONE,
	SET_USER_NAME,
	CHANGE_FOOD_COUNT
} from './mutationsName'
export default {
	[SET_HOME] (state, res) {
		state.address = res.data.address;
		state.recommends = res.data.recommends;
		state.shops = res.data.shops
		console.log('被调用的commit');
	},
	[SET_TOKEN] (state, token) {
		state.token = token;
		localStorage.setItem('login_token', token)
	},
	[SET_PHONE] (state, phone) {
		state.phone = phone;
	},
	[SET_USER_NAME] (state, username) {
		state.username = username
	}
}
