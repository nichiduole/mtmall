<template>
  <div>
    <MainFooter v-show="$route.meta.isShowMainFooter">
    </MainFooter>
    <router-view></router-view>
  </div>
</template>

<script>

import MainFooter from "@/components/MainFooter.vue";
import { SET_PHONE, SET_USER_NAME } from '@/store/mutationsName.js'
export default {
  components: {
    MainFooter
	},
	mounted() {
		if(localStorage.getItem('phone')) {
			let phone = localStorage.getItem('phone')
			this.$store.commit(SET_PHONE, phone)
		} else if(localStorage.getItem('username')) {
			let username = localStorage.getItem('username')
			this.$store.commit(SET_USER_NAME, username)
		} else {
			alert('请先登录')
			this.$router.replace('/login')
		}
	}
}
</script>
<style lang='less' scoped>
</style>
