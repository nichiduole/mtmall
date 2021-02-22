<template>
  <div class="container">
    <div class="near">
      <i class="iconfont icon-liebiao"></i>
      附近商家
    </div>
    <div v-for="shop in shops"
         :key="shop.id"
         class="wrraper">
      <img :src="shop.img">
      <div class="content" @click="$router.push('/shop_detail')">
        <div style="fontSize:18px">
          {{shop.title}}
        </div>
        <div style="fontSize:14px">
          {{shop.per}}
        </div>
        <div style="fontSize:14px">
          {{shop.address}}
        </div>
        <div>
          {{shop.type}}
        </div>
        <br>
        <div style="fontSize:12px">
          <img :src="shop.supports.icon1">
          {{shop.supports.together}}
        </div>
        <div style="fontSize:12px">
          <img :src="shop.supports.icon2">
          {{shop.supports.ticket}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NearShops',
  props: ['shops'],
}

</script>
<style lang='less' scoped>
.container {
  margin: 20px 15px 60px 15px;
  .near {
    i {
      font-size: 18px;
      margin-right: 5px;
    }
    color: #f4511e;
    font-size: 18px;
    padding-bottom: 20px;
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);
  }
  .wrraper {
    display: flex;
    flex-wrap: wrap;
    height: 172px;
    padding-bottom: 10px;
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);
    img {
      margin-top: 15px;
      width: 100px;
      height: 100px;
    }
    .content {
      flex: 1;
      margin-top: 15px;
      div {
        margin: 0 0 8px 20px;
        img {
          width: 15px;
          height: 15px;
          vertical-align: text-bottom;
          margin-top: 0;
        }
      }
    }
  }
}
</style>
