<template>
  <div class="login">
    <div class="goBack"
         @click="$router.back()">
      <i class="iconfont icon-back">返回</i>
    </div>
    <div class="title">
      <span>注册&登录</span>
    </div>
    <div class="switch">
      <div @click="phoneLogin()"
           :class="{active: isShow}">手机登录</div>
      <div @click="emailLogin()"
           :class="{active: !isShow}">昵称登录</div>
    </div>
    <div class="input">
      <div class="phoneLogin"
           v-if="isShow">
        <div>
          <img src="@/assets/images/profile/user-icon.png">
          <input type="text"
                 placeholder="请输入用户手机"
                 v-model="phone"
                 minlength="11"
                 maxlength="11">
        </div>
        <div>
          <img src="@/assets/images/profile/lock-icon.png">
          <input type="password"
                 placeholder="请输入用户密码"
                 v-model="pwd"
                 minlength="6"
                 maxlength="16">
        </div>
      </div>
      <div class="usernameLogin"
           v-else>
        <div>
          <img src="@/assets/images/profile/user-icon.png">
          <input type="text"
                 placeholder="请输入用户昵称"
                 v-model="username"
                 minlength="6"
                 maxlength="16">
        </div>
        <div>
          <img src="@/assets/images/profile/lock-icon.png">
          <input type="password"
                 placeholder="请输入用户密码"
                 v-model="pwd"
                 minlength="6"
                 maxlength="16">
        </div>
      </div>
      <br>
      <button style="fontSize:16px"
              @click="verifyLogin()">登录</button>
    </div>
    <div class="huo">
      或
    </div>
    <div class="other_login">
      <div class="img">
        <img src="@/assets/images/profile/fb.png">
        <img src="@/assets/images/profile/tt.png">
      </div>
      <div class="register">
        <span>还没有账号？</span>
        <span style="color:#f4511e"
              @click="$router.replace('/register')">立即注册</span>
      </div>
    </div>

    <img src="~@/assets/images/profile/background.png"
         class="background">
  </div>
</template>

<script>

import axios from 'axios'
import { SET_TOKEN, SET_PHONE, SET_USER_NAME } from '@/store/mutationsName.js'
export default {
  name: 'Login',
  data () {
    return {
      list: [],
      isShow: true,
      phone: '',
      username: '',
      pwd: ''
    }
  },
  methods: {
    phoneLogin () {
      this.isShow = true;
    },
    emailLogin () {
      this.isShow = false;
    },
    verifyLogin () {
      if (this.phone) {
        console.log('进入手机号登录判断');
        if (this.phone === '13333333333' && this.pwd === '123456789') {
          // alert('登陆成功')
          this.$router.replace('/home')
          this.$store.commit(SET_TOKEN, 'iamthetesttoken')
					this.$store.commit(SET_PHONE, this.phone)
					localStorage.setItem('username',this.phone)
        } else {
          alert('登陆失败')
        }
      } else {
        if (this.username === 'admin' && this.pwd === '123456789') {
          // alert('登陆成功')
					this.$router.replace('/profile')
          this.$store.commit(SET_TOKEN, 'iamthetesttoken')
					this.$store.commit(SET_USER_NAME, this.username)
					localStorage.setItem('username',this.username)
        } else {
          alert('登陆失败')
        }
      }
    }
  }
}
</script>
<style lang='less' scoped>
.login {
  text-align: center;
  .title {
    font-size: 24px;
    margin-top: 50px;
    letter-spacing: 2px;
  }
  .switch {
    margin-top: 50px;
    font-size: 14px;
    div {
      width: 100px;
      height: 30px;
      line-height: 30px;
      display: inline-block;
    }
    .active {
      border-bottom: 4px solid #f4511e;
      color: #f4511e;
    }
  }
  .input {
    margin-top: 20px;
    text-align: center;
    img {
      height: 18px;
      margin-right: 20px;
    }
    .phoneLogin,
    .usernameLogin {
      div {
        width: 320px;
        height: 50px;
        color: #536e7b;
        background-color: #f5f5f5;
        margin: auto;
        line-height: 50px;
        input {
          text-align: center;
          height: 30px;
          width: 200px;
          color: #536e7b;
          background-color: #f5f5f5;
        }
      }
    }
    button {
      height: 50px;
      width: 200px;
      border-radius: 25px;
      background-color: #f4511e;
      color: #fff;
      border: none;
      margin: 10px 0 50px 0;
    }
  }
}
.huo {
  height: 40px;
  width: 40px;
  border: solid 1px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  line-height: 40px;
  font-size: 20px;
  margin: 0 auto;
}
.other_login {
  img {
    height: 35px;
    margin: 50px 20px 0 20px;
  }
}
.background {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: -1;
}
.register {
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 100px;
}
.goBack {
  position: fixed;
  top: 10px;
  left: 20px;
  font-size: 20px;
  line-height: 30px;
  color: #f4511e;
  i {
    font-size: 14px;
  }
}
</style>
