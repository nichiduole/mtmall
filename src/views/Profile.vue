<template>
  <div class="profile">
    <MainHeader>
      <template #center>
        <span>我 的</span>
      </template>
    </MainHeader>
    <div class="information"
         @click="goLogin()">
      <div class="img">
        <img src="@/assets/images/profile/touxiang.jpg">
      </div>
      <div class="login"
           :disabled="isDisabled">
        <span>{{phone||username ? phone || username : '登录 / 注册'}}</span>
        <span>{{phone||username ? '欢迎使用mtmall' : '建议绑定手机号'}}</span>
      </div>
      <div class="into">
        <p>></p>
      </div>
    </div>
    <div class="others"
         @click="blank()">
      <div class="visited">
        <i class="iconfont icon-zuji"></i>
        浏览历史
      </div>
      <div class="messages">
        <i class="iconfont icon-xinxi"></i>
        我的消息
      </div>
      <div class="settings">
        <i class="iconfont icon-shezhi"></i>
        应用设置
      </div>
      <div class="about">
        <i class="iconfont icon-kefu"></i>
        关于我们
      </div>
    </div>
    <button @click="outLogin()">退出登录</button>

  </div>
</template>

<script>

import MainHeader from '@/components/MainHeader.vue'
import { mapState } from 'vuex'
export default {
  name: 'Profile',
  data () {
    return {
      // isDisabled: false
    }
  },
  components: {
    MainHeader
  },
  computed: {
    ...mapState({
      phone: state => state.phone,
      username: state => state.username
    }),
    isDisabled () {
      return this.phone || this.username ? false : true
    }
  },
  methods: {
    goLogin () {
      if (!this.phone && !this.username) {
        this.$router.push('/login')
      }
    },
    blank () {
      alert('该页面正在施工中')
		},
		outLogin() {
			localStorage.removeItem('login_token')
			localStorage.removeItem('username')
			localStorage.removeItem('phone')
			this.$store.state.phone = ''
			this.$store.state.username = ''
			this.$router.replace('/login')
		}
  }
}

</script>
<style lang='less' scoped>
@import url("~@/assets/css/common.less");

.profile {
  // letter-spacing: 2px;
  .information {
    margin-top: 44px;
    border-top: solid 2px rgba(0, 0, 0, 0.3);
    padding: 0 30px 0 30px;
    height: 200px;
    background-color: @maincolor;
    color: #fff;
    img {
      float: left;
      height: 80px;
      border-radius: 50%;
      margin-top: 55px;
    }
    .login {
      float: left;
      height: 80px;
      padding-left: 20px;
      margin-top: 70px;
      & span:nth-child(1) {
        font-size: 20px;
        display: block;
        padding-bottom: 10px;
      }
      & span:nth-child(2) {
        font-size: 14px;
        // letter-spacing: 1px;
      }
    }
    .into {
      font-size: 30px;
      float: right;
      padding-top: 46px;
    }
  }
  .others {
    margin: 30px 30px 30px 20px;
    div {
      height: 60px;
      font-size: 20px;
      line-height: 60px;
      border-bottom: solid 1px rgba(252, 41, 41, 0.1);
      div {
        display: none;
      }
    }
    i {
      font-size: 24px;
    }
  }
}
button {
  width: 100%;
  height: 50px;
  background-color: #f4511e;
  color: #fff;
  border: none;
  margin-top: 60px;
}
</style>

