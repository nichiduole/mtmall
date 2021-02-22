<template>
  <div class="search">
    <div class="header">
      <MainHeader>
        <template #left>
          <i class="iconfont icon-back"
             @click="$router.go(-1)"></i>
        </template>
        <template #center>
          <span>搜美食</span>
        </template>
      </MainHeader>
    </div>
    <div class="content">
      <img src="@/assets/images/home/search/search.png"
           class="first">
      <div class="position">
        <img src="@/assets/images/home/search/position.png">
        <p>重庆</p>
      </div>
      <div class="input">
        <input type="text"
               placeholder="请输入搜索信息">
        <br>
        <button @click="isShow">搜索美食</button>
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
export default {
  name: 'Search',
  data () {
    return {
    };
  },
  components: {
    MainHeader
  },
  methods: {
    isShow () {
      alert('该页面正在施工中')
    }
  }
}

</script>
<style lang='less' scoped>
.search {
  text-align: center;
  margin-bottom: 100px;
  .header {
    letter-spacing: 2px;
    i {
      font-size: 24px;
    }
  }
  .content {
    margin-top: 44px;
    background-size: cover;
    .first {
      width: 100%;
      height: 400px;
    }
    .position {
      margin-top: 30px;
      img {
        width: 30px;
      }
      p {
        font-size: 24px;
        color: #536e7b;
        letter-spacing: 2px;
      }
    }
    .input {
      margin-top: 30px;
      input {
        text-align: center;
        height: 50px;
        width: 320px;
        color: #536e7b;
        background-color: #f5f5f5;
      }
      button {
        height: 50px;
        width: 200px;
        border-radius: 25px;
        background-color: #f4511e;
        color: #fff;
        border: none;
        margin-top: 10px;
      }
    }
  }
}
</style>
