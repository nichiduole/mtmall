<template>
  <div class="home">
    <div class="main-content" v-show="shops">
			<MainHeader>
      <template #left>
        <i class="iconfont icon-sousuo"
           @click="goSearch()"></i>
      </template>
      <template #center>
        <span>{{address}}</span>
      </template>
      <template #right>
        <i class="iconfont icon-saoma"></i>
      </template>
    </MainHeader>
    <Recommends :recommends='recommends'></Recommends>
    <NearShops :shops="shops"></NearShops>
		</div>
		<div class="back-img" v-show="!shops">
			<img src="~@/assets/images/home/background/recommends.svg">
			<img src="~@/assets/images/home/background/shops.svg">
			<img src="~@/assets/images/home/background/shops.svg">
			<img src="~@/assets/images/home/background/shops.svg">
			<img src="~@/assets/images/home/background/shops.svg">
			<img src="~@/assets/images/home/background/shops.svg">
			<img src="~@/assets/images/home/background/shops.svg">
			<img src="~@/assets/images/home/background/shops.svg">
		</div>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader'
import Recommends from '@/views/homes/Recommends'
import NearShops from '@/views/homes/NearShops'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Home',
  components: {
    MainHeader,
    Recommends,
    NearShops
  },
  computed: {
    ...mapState(['address', 'recommends', 'shops'])
  },
  methods: {
    goSearch () {
      this.$router.push('/search')
    }
  },
  mounted () {
    this.$store.dispatch('getHome');
  }
}
</script>

<style lang="less" scoped>
i {
  font-size: 20px;
}
span {
  font-size: 16px;
}
</style>
