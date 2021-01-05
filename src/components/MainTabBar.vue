<template>
  <div class="main-tab-bar">
    <div class="tab-item"
         @click="replaceTo('/home')"
         :class="{active: $route.path === '/home'}">
      <span><i class="iconfont icon-shouye"></i></span>
      <span>首页</span>
    </div>
    <div class="tab-item"
         @click="replaceTo('/search')"
         :class="{active: $route.path === '/search'}">
      <span><i class="iconfont icon-sousuo"></i></span>
      <span>搜索</span>
    </div>
    <div class="tab-item"
         @click="replaceTo('/order')"
         :class="{active: $route.path === '/order'}">
      <span><i class="iconfont icon-wodedingdan"></i></span>
      <span>订单</span>
    </div>
    <div class="tab-item"
         @click="replaceTo('/profile')"
         :class="{active: $route.path === '/profile'}">
      <span><i class="iconfont icon-wodejuhuasuan"></i></span>
      <span>我的</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainTabBar',
  data () {
    return {
    };
  },
  computed: {
  },
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
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 5px;
  .tab-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
    i {
      font-size: 20px;
    }
  }
  .active {
    color: @maincolor;
  }
}
</style>
