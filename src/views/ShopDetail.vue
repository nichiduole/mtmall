<template>
	<div>
		<detail-header></detail-header>
		<div class="header">
			<div class="food" :class="{active:$route.path === '/shop_detail/food'}" @click="goDetail('/shop_detail/food')">订餐</div>
			<div class="rating" :class="{active:$route.path === '/shop_detail/rating'}" @click="goDetail('/shop_detail/rating')">评价</div>
			<div class="info" :class="{active:$route.path === '/shop_detail/info'}" @click="goDetail('/shop_detail/info')">商家</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
import DetailHeader from './shop_detail/DetailHeader.vue';
export default {
	name: 'ShopDetail',
	data () {
		return {
			isactive: false
		};
	},
	components: {
		DetailHeader
	},
	methods: {
		goDetail(path) {
			if(path !== this.$route.path) {
				this.$router.push(path)
			}
		},
	}
}

</script>
<style lang='less' scoped>
.header {
	display: flex;
	.food,.rating,.info {
		text-align: center;
		line-height: 50px;
		flex: 33%;
		height: 50px;
		font-size: 16px;
	}
	.active {
		color: #F4511E;
		border-bottom: 3px solid #F4511E;
	}
}
</style>
