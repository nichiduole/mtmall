<template>
  <div class="container">
    <div v-for="recommend in recommends"
         :key="recommend.id"
         class="content">
      <img :src="recommend.img"
           @click="test($event,recommends,recommend)">
      <p>{{recommend.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommends',
  props: ['recommends'],
  methods: {
    test (a, b, c) {
      console.log(a)
      console.log(b)
      console.log(c)
    }
  }
}

</script>
<style lang='less' scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  margin-top: 44px;
  .content {
    flex: 25%;
    margin-top: 15px;
    img {
      height: 45px;
    }
  }
}
</style>
