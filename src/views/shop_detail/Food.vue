<template>
  <div class="detail">
    <div class="all">
      <div class="food">
        <div class="left">
          <ul class="leftUl"
              ref="leftUl">
            <li v-for="(good,index) in goods"
                :key="index"
                :class="{active:nowIndex === index}"
                @click="leftToRight(index)">
              {{good.type}}
            </li>
          </ul>
        </div>
        <div class="right">
          <ul class="rightUl"
              ref="rightUl">
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
                    <div class="food-count"><span @click="minusCount"> - </span> {{ foodCount }} <span @click="addCount">+</span></div>
                  </div>

                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="cart">
          <div class="cart-img">
            <img src="@/assets/images/cart.png"
                 alt=""
                 class="cart-img-content">
          </div>
          <div class="price">
            <p class="price-content">￥ 0 | 另需配送费5元</p>
          </div>
          <div class="submit-button">
            去结算
          </div>
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
      foodCount: 0,
      goods: [],
      tops: [],
      rightScrollY: 0,
      leftScrollY: 0,
    };
  },
  mounted () {
    if (this.goods) {
      this.initScroll()
      this.initTops()
    }
    axios.get('https://www.fastmock.site/mock/32026ad0f5f184aae656d043e485e47d/api_mtmall/food').then(res => {
      this.goods = res.data.goods
    })
  },
  computed: {
    nowIndex () {
      let index = this.tops.findIndex((top, index) => this.rightScrollY >= this.tops[index] && this.rightScrollY < this.tops[index + 1]);
      if (this.$refs.leftUl.children[index]) {
        this.$nextTick(() => {
          this.leftScroll.scrollToElement(this.$refs.leftUl.children[index], 1000)
        })
      }
      return index
    }
  },
  watch: {
    goods () {
      this.$nextTick(() => {
        this.initScroll()
        this.initTops()
      })
    }
  },
  methods: {
    minusCount () {
      if (this.foodCount > 0) {
        this.foodCount -= 1
      }
    },
    addCount () {
      this.foodCount += 1
    },
    initScroll () {
      this.leftScroll = new BScroll('.left', {
        scrollY: true,
        probeType: 3
      })
      this.rightScroll = new BScroll('.right', {
        scrollY: true,
        probeType: 3

      })
      this.leftScroll.on('scroll', ({ x, y }) => {
        this.leftScrollY = Math.abs(y)
      })
      this.rightScroll.on('scroll', ({ x, y }) => {
        this.rightScrollY = Math.abs(y)
      })
    },
    initTops () {
      let lis = Array.from(this.$refs.rightUl.children)
      let allLength = 0
      let temTops = []
      temTops.push(allLength)
      lis.reduce((allLength, li) => {
        allLength += li.offsetHeight
        temTops.push(allLength)
        return allLength
      }, allLength)
      console.log(temTops)
      this.tops = temTops
    },
    leftToRight (index) {
      this.rightScrollY = this.tops[index]
      this.rightScroll.scrollTo(0, -this.tops[index], 1000)
    }
  }
}
</script>
<style lang='less' scoped>
.active {
  color: red;
}
.cart {
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #141f28;
  display: flex;
  .price {
    margin-left: 50px;
    color: #717a82;
    font-size: 12px;
    line-height: 25px;
  }
  .cart-img {
    height: 30px;
    width: 30px;
    background-color: #2b363d;
    position: relative;
    left: 30px;
    top: -15px;
    padding: 10px;
    border-radius: 50%;
    .cart-img-content {
      width: 100%;
      color: #7a8388;
    }
  }
  .submit-button {
    width: 100px;
    position: absolute;
    right: 0;
    text-align: center;
    line-height: 50px;
    height: 50px;
    background-color: #2a353c;
    color: #7591a3;
    font-size: 14px;
  }
}
.detail {
  position: relative;
}
.food {
  display: flex;
  overflow: hidden;
  margin-bottom: 50px;
  .left {
    width: 20%;
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
    width: 80%;
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
        position: relative;
        .food-count {
          position: absolute;
          color: grey;
          font-size: 14px;
          right: 0;
          bottom: 0;
          .decrease,
          .increase {
            border-radius: 50%;
            border: 1px solid grey;
            display: inline-block;
            height: 16px;
            width: 16px;
            text-align: center;
            line-height: 16px;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
