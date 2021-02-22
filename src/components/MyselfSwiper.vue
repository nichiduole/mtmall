<template>
  <swiper :options="swiperOption"
          ref="mySwiper"
          class="swiper">
    <swiper-slide>
      <div class="content">
        <img src="@/assets/images/home/nav/1.jpg">
        <p>甜品饮品</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="content">
        <img src="@/assets/images/home/nav/2.jpg">
        <p>我是文字</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="content"><img src="@/assets/images/home/nav/3.jpg"
             alt="">
        <p>我是文字</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="content"><img src="@/assets/images/home/nav/4.jpg"
             alt="">
        <p>我是文字</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="content"><img src="@/assets/images/home/nav/5.jpg"
             alt="">
        <p>我是文字</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="content"><img src="@/assets/images/home/nav/6.jpg"
             alt="">
        <p>我是文字</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="content"><img src="@/assets/images/home/nav/7.jpg"
             alt="">
        <p>我是文字</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="content"><img src="@/assets/images/home/nav/8.jpg"
             alt="">
        <p>我是文字</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="content"><img src="@/assets/images/home/nav/9.jpg"
             alt="">
        <p>我是文字</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="content"><img src="@/assets/images/home/nav/10.jpg"
             alt="">
        <p>我是文字</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="content"><img src="@/assets/images/home/nav/11.jpg"
             alt="">
        <p>我是文字</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="content"><img src="@/assets/images/home/nav/12.jpg"
             alt="">
        <p>我是文字</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="content"><img src="@/assets/images/home/nav/13.jpg"
             alt="">
        <p>我是文字</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="content"><img src="@/assets/images/home/nav/14.jpg"
             alt="">
        <p>我是文字</p>
      </div>
    </swiper-slide>
    <div class="swiper-pagination"
         slot="pagination"></div>
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'SwiperItem',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
        },
        slidesPerView: 4,
        slidesPerColumn: 2
      }
    }
  },
}
</script>

<style lang="less" scoped>
@import url("~@/assets/css/common.less");

.swiper-slide {
  text-align: center;
  height: 60px;
  // margin: 10px 0 10px 0;
}
.swiper {
  height: 210px;
  overflow: hidden;
  margin-top: 10px;
  background-color: rgba(0, 0, 0, 0.2);
}
img {
  height: 50px;
  width: 50px;
}
.swiper-pagination {
  --swiper-theme-color: @maincolor;
}
</style>
