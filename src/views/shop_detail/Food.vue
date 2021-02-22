<template>
  <div class="detail">
		<div class="all">
			<div class="food">
				<div class="left">
      <ul class="leftUl">
        <li v-for="(good,index) in goods"
            :key="index">
          {{good.type}}
        </li>
      </ul>
    		</div>
    		<div class="right">
      <ul class="rightUl">
        <li v-for="(good,index) in goods"
            :key="index">
          <div class="type">{{good.type}}</div>
          <div class="content"
               v-for="(food,index) in good.foods"
               :key="index">
            <img :src="food.img">
            <div class="desc">
              <div class="name">
                {{food.name}}
              </div>
              <div class="info">
                {{food.description}}
              </div>
              <div class="sell">
                月售{{food.sellcount}} 好评度{{food.rating}}%
              </div>
              <div class="old-price">
                ￥{{food.oldprice}}
              </div>
            </div>
          </div>
        </li>
      </ul>
    		</div>
				<div class="cart">
					我是购物车
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import axios from "axios"
import BScroll from 'better-scroll'
export default {
  name: 'Food',
  data () {
    return {
      goods: []
    };
  },
  mounted () {
		if(this.goods) {
			this.initScroll ()
		}
    axios.get('https://www.fastmock.site/mock/32026ad0f5f184aae656d043e485e47d/api_mtmall/food').then(res => {
      this.goods = res.data.goods
    })
  },
  components: {
		
	},
  computed: {},
	watch: {
		goods() {
			this.$nextTick(() => {
				this.initScroll ()
			})
		}
	},
  methods: {
    initScroll () {
      new BScroll('.left', {
        scrollY: true
      })
      new BScroll('.right', {
        scrollY: true
      })
    }
  }
}

</script>
<style lang='less' scoped>
.cart {
	height: 50px;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: pink;
}
.detail {
	position: relative;
}
.food {
  display: flex;
  // height: calc(100vh - 283px);
  overflow: hidden;
	// position: absolute;
	// bottom: 50px;
	// top: 233px;
  .left {
    flex: 22%;
    background-color: #f7f8fa;
		height: calc(100vh - 283px);
    li {
      height: 40px;
      line-height: 40px;
      width: 100%;
      text-align: center;
      border-bottom: 1px;
    }
  }
  .right {
    flex: 78%;
		height: calc(100vh - 283px);
    .type {
      padding-left: 10px;
      height: 50px;
      line-height: 50px;
      font-size: 14px;
    }
    .content {
      padding: 10px 10px;
      display: flex;
      img {
        height: 100px;
        padding-right: 10px;
				border-radius: 25px;
      }
      .name {
        font-size: 16px;
        padding-bottom: 10px;
      }
      .info {
        color: #fa8006;
        background-color: #fef8e0;
        height: 18px;
        width: 85px;
        text-align: center;
        border-radius: 5px;
      }
      .sell {
        padding-top: 2px;
      }
      .old-price {
        padding-top: 15px;
        color: #f94f45;
        font-size: 16px;
        font-weight: 700;
      }
    }
  }
}
</style>
