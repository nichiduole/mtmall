import Vue from 'vue';
import { ValidationProvider, extend } from 'vee-validate';

// Add a rule.
extend('secret', {
	validate: value => value === 'example',
	message: 'This is not the magic word'
});
extend('phone', {
	validate: value => {
		return /^1(3|4|5|6|7|8|9)\d{9}$/.test(value)
	},
	message: '手机号错误'
});
extend('pwd', {
	validate: value => {
		return /\w{6,16}/.test(value)
	},
	message: '密码错误'
});
extend('yzm', {
	validate: value => {
		return /\d{6}/.test(value)
	},
	message: '验证码错误'
});

// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
