<template>
  <div class="main-tab-bar">
    <div class="tab-item"
         @click="replaceTo('/home')"
         :class="{active: $route.path === '/home'}">
      <span><i class="iconfont icon-shouyefill"></i></span>
      <span>首页</span>
    </div>
    <div class="tab-item"
         @click="$router.push('/search')"
         :class="{active: $route.path === '/search'}">
      <span><i class="iconfont icon-sousuo"></i></span>
      <span>搜索</span>
    </div>
    <div class="tab-item"
         @click="replaceTo('/order')"
         :class="{active: $route.path === '/order'}">
      <span><i class="iconfont icon-quanbudingdan"></i></span>
      <span>订单</span>
    </div>
    <div class="tab-item"
         @click="replaceTo('/profile')"
         :class="{active: $route.path === '/profile'}">
      <span><i class="iconfont icon-wodefill"></i></span>
      <span>我的</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainTabBar',
  methods: {
    replaceTo (path) {
      if (path !== this.$route.path) {
        this.$router.replace(path)
      }
    }
  }
}
</script>

<style lang='less' scoped>
@import url("~@/assets/css/common.less");
.main-tab-bar {
  display: flex;
  position: fixed;
  bottom: 0px;
  left: 0;
  right: 0;
  height: 44px;
  font-size: 14px;
  z-index: 999;
  background-color: #fff;
  .tab-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
    i {
      font-size: 20px;
      display: inline-block;
      line-height: 26px;
    }
  }
  .active {
    color: @maincolor;
  }
}
</style>
