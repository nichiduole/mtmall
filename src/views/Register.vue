<template>
  <div class="register">
    <div class="goBack"
         @click="$router.replace('/profile')">
      <i class="iconfont icon-back">返回</i>
    </div>
    <div class="input">
      <div class="form">
        <img src="@/assets/images/profile/user-icon.png">
        <ValidationProvider rules="phone"
                            v-slot="{ errors }">
          <input type="text"
                 placeholder="请输入注册手机号"
                 v-model="phone"
                 maxlength="11"
                 minlength="11">
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <br>
      <div class="form">
        <img src="@/assets/images/profile/lock-icon.png">
        <ValidationProvider rules="pwd"
                            v-slot="{ errors }">
          <input type="password"
                 placeholder="请输入注册密码"
                 v-model="pwd"
                 maxlength="16"
                 minlength="6">
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <!-- 140bfa98ee0b457d985e9f82010bf35d -->
      <br>
      <div class="form">
        <img src="@/assets/images/profile/lock-icon.png">
        <ValidationProvider rules="yzm"
                            v-slot="{ errors }">
          <input type="text"
                 placeholder="请输入验证码"
                 v-model="yzm"
                 maxlength="6"
                 minlength="6">
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <br>
      <div class="code">
        <button :disabled="!isDisabled || countTime>0"
                @click="sendCode()">{{countTime? `${countTime}秒后可重新获取验证码` : `获取验证码`}}</button>
      </div>
      <button style="fontSize:16px"
              class="submit">注册</button>
    </div>
    <div class="huo">
      第三方账号注册
    </div>
    <div class="other_login"
         @click="blank()">
      <img src="@/assets/images/profile/fb.png">
      <img src="@/assets/images/profile/tt.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      phone: '',
      pwd: '',
      yzm: '',
      countTime: 0
    }
  },
  computed: {
    isDisabled () {
      return /^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phone) ? true : false
    }
  },
  methods: {
    blank () {
      alert('该页面正在施工中')
    },
    sendCode () {
      this.countTime = 5;
      let interval = setInterval(() => {
        this.countTime--;
        this.countTime === 0 && clearInterval(interval)
      }, 1000)
    }
  }
}

</script>
<style lang='less' scoped>
.register {
  height: 100vh;
  background-image: url("~@/assets/images/profile/register.png");
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
  .input {
    padding-top: 100px;
    text-align: center;
    .form {
      width: 320px;
      height: 50px;
      color: #536e7b;
      background-color: #f5f5f5;
      margin: auto;
      line-height: 50px;
      position: relative;
      img {
        height: 18px;
        text-align: left;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 20px;
      }
    }

    input {
      // text-align: center;
      height: 30px;
      width: 100px;
      color: #536e7b;
      background-color: #f5f5f5;
    }
    span {
      color: red;
    }
    .submit {
      height: 50px;
      width: 320px;
      background-color: #f4511e;
      color: #fff;
      border: none;
      margin: 20px 0 50px 0;
      margin-bottom: 100px;
    }
  }
}
.huo {
  text-align: center;
  line-height: 40px;
  width: 200px;
  font-size: 20px;
  margin: 0 auto;
  color: #fcede8;
  font-size: 16px;
  margin-bottom: -30px;
  background-color: rgba(144, 136, 136, 0.5);
}
.other_login {
  text-align: center;
  img {
    height: 35px;
    margin: 50px 25px;
  }
}
.code button {
  height: 50px;
  width: 320px;
}
</style>
