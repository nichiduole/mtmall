<template>
  <div>
    <div class="header" @click="isShow = false">
			<div class="goback" @click="$router.push('/home')">返回</div>
      <img src="https://img.meituan.net/msmerchant/c1b74df19fb2eaae7eb661f3ba4ad831977012.jpg@320w_320h_1e_1c" alt="">
			<p>
				<span class="brand">
					品牌
				</span>
				书亦烧仙草（小龙坎正街店）
				</p>
			<span class="info">月售1409单 美团专送 约40分钟 距离2.4km</span>
			<div class="notice line">
				<span class="font">公告:</span>
				欢迎光临书亦烧仙草，感谢新老顾客长久以来对本店的支持和信任，我们一直严格把控每一杯饮品品质，不断追求更高更好的服务，温馨提示1.高峰期请提前下单保障用餐时间2.加料请一定要备注是加在哪杯里3.黑砖遇高温易融化，热饮请慎点4.葡萄干和花生只能加在书亦烧仙草或小芋圆烧仙草内，两款小料请慎点！！

			</div>
    </div>
		<div class="hidden" :class="{show:isShow}" @click="isShow = true">
			<div class="content">
				<div class="title" style="font-size:18px;font-weight:500;margin-bottom:10px
				">
					书亦烧仙草（小龙坎正街店）
				</div>
				<div class="hidden-rating" style="margin-bottom:10px">
					<span style="color:#F4511E">4.7分</span> 月售1409 接受预定
				</div>
				<div class="high-rating" style="margin-bottom:50px;background-color:grey;width:100px;text-align:center;height:20px;line-height:20px;border-radius:5px">
					点评高分店铺
				</div>
				<div class="new" style="margin-bottom:10px">
					<span class="first-font">首</span>
					新人立减13元（本优惠与新人首单红包不可同享）
				</div>
				<div class="decrease" style="margin-bottom:10px">
					<span class="first-font">减</span>
					满25减2；满35减5；满45减7；满66减12
				</div>
				<div class="god" style="margin-bottom:10px">
					<span class="first-font">神</span>
					该商家支持使用天天神券
				</div>
				<div class="cut" style="margin-bottom:30px">
					<span class="first-font">折</span>
					折扣商品5折起；部分商品含津贴3元
				</div>
				<div class="hidden-notice" style="margin-bottom:30px">
					<h3>公告：</h3>
					欢迎光临书亦烧仙草，感谢新老顾客长久以来对本店的支持和信任，我们一直严格把控每一杯饮品品质，不断追求更高更好的服务。温馨提示1.高峰期请提前下单保障用餐时间2.加料请一定要备注是加在哪杯里3.黑砖遇高温易融化，热饮请慎点4.葡萄干和花生只能加在书亦烧仙草或小芋圆烧仙草内，两款小料请慎点！！
				</div>
				<div class="serve">
					<h4>商家服务</h4>
					准时宝 热情掌柜 食材公示
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'DetailHeader',
  data () {
    return {
			headerData: {},
			isShow: true
    };
  },
  mounted () {
		axios.get('https://www.fastmock.site/mock/32026ad0f5f184aae656d043e485e47d/api_mtmall/detail_header').then(res => {
			this.headerData = res.data.info
			console.log(this.headerData);
		})
  },
}

</script>
<style lang='less' scoped>
.goback {
	color: #fff;
	font-size: 16px;
	position: fixed;
	top: 15px;
	left: 10px;
}
.show {
	display: none;
}
.hidden {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 999;
	background-color: rgba(0,0,0,.8);
	color: #fff;
}
.content {
	padding: 50px 15px;
	font-size: 14px;
}
.first-font {
	background-color: #F4511E;
	height: 20px;
	width: 20px;
	display: inline-block;
	font-size: 12px;
	line-height: 20px;
	text-align: center;
	border-radius: 5px;
}
.header {
  height: 180px;
	text-align: center;
  background: url(https://fuss10.elemecdn.com/f/5c/ead54394c3de198d3e6d3e9111bbfpng.png) 0 -200px no-repeat;
	.brand {
		font-size: 14px;
		background-color: #F4511E;
		border-radius: 5px;
		display: inline-block;
		width: 40px;
		height: 20px;
		line-height: 20px;
	}
	img {
		height: 60px;
		margin-top: 20px;
		
	}
	.font {
		color: #F4511E;
	}
	p {
		font-size: 16px;
		font-weight: 600;
		// color: #fff;
	}
	.info {
		display: inline-block;
		margin-bottom: 10px;
	}
	.notice {
		height: 15px;
		width: 200px;
		margin: auto;
		border: 1px solid rgba(0, 0, 0, .2);
		padding: 4px;
		border-radius: 5px;
	}
}
</style>
