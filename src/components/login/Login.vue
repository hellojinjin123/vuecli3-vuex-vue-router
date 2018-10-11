<template>
  <div class="login-wrapper">
    <div class="login">
      <div class="logo"></div>
      <mt-field placeholder="请输入手机号码" v-model="username" state="" disableClear></mt-field>
      <mt-field placeholder="请输入密码" type="password" v-model="password" state="" :attr="{ type: type }" disableClear>
        <span :class="{'pass-eye': true, active: show}" @click="toggleEye"></span>
      </mt-field>
      <div class="err-box" v-show="errShow"><i class="icon-err"></i><span class="err">{{err}}</span></div>
      <mt-button size="large" @click="login">登录</mt-button>
      <div class="forget-box">
        <div class="forget">忘记密码</div>
        <div class="register">注册</div>
      </div>

      <div class="quick-login">
        <div class="line"></div>
        <div class="qlogin">快捷登录方式</div>
        <div class="line"></div>
      </div>
      <div class="third-login">
        <div class="wx"></div>
        <div class="weibo"></div>
        <div class="qq"></div>
      </div>
    </div>
  </div>

</template>

<script>
  import { Toast } from 'mint-ui';
  export default {
    name: 'Login',
    data () {
      return {
        type: 'password',
        show: false,
        username: '',
        uState: '',
        password: '',
        pState: '',
        users: [
          {username: 13631409842, password: 'root123', nickname: 'jmh', face: 'http://www.24jyun.com/apicode/i.php?img=2017/02/17/58a66c0dea7e6.PNG'},
          {username: 13631409811, password: 'root123', nickname: '大金哥', face: 'http://www.24jyun.com/apicode/i.php?img=2016/11/16/582bf7e7ab3af.jpg'}
        ],
        err: '',
        errShow: false
      }
    },
    methods:{
      login() {
        // this.$http
        //   .post('htapi/passport/login', {
        //     'account': this.username,
        //     'password': this.password
        //   })
        //   .then(res=>{
        //     console.log(res.body)
        //   })
        // 模拟登录验证
        this.uState = '';
        this.pState = ''
        var userinfo = this.users.find(item=>{
          if(item.username == this.username){
            this.uState = 'success'
            return true
          }
        })
        if(!this.uState ){
          this.err = '用户名错误'
          this.errShow = true
          return false
        }
        if(userinfo && userinfo.password == this.password){
          this.pState = 'success'
        }else{
          this.err = '密码错误'
          this.errShow = true
          return false
        }

        if(this.pState =='success' && this.uState == 'success'){
          localStorage.setItem('cmuserid', true)
          localStorage.setItem('userinfo', JSON.stringify(userinfo))
          Toast({
            message: '欢迎 亲',
            position: 'bottom',
            iconClass: 'icon-success'
          })
          this.$router.push('/user')
        }
        // this.uState = this.uState? 'success': 'error'
        // this.pState = this.pState? 'success': 'error'

      },
      toggleEye() {
        this.show = !this.show
        this.type = this.type == 'password'? 'text': 'password'
      }
    },
    created(){

    }
  }
</script>

<style lang="scss">
  .login-wrapper{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff;
  }
  .login{
    background: #fff;
    padding: 0 15px 150px 15px;

    .err-box{
      display: flex;
      align-items: center;
      .icon-err{
        width: 16px;
        height: 16px;
      }
      .err{
        margin-left: 10px;
      }
    }

    .logo{
      width: 82px;
      height: 82px;
      margin: 10px auto;
      background: url(../../images/24ing.png) no-repeat;
      background-size: cover;
    }

    .mint-cell{
      .mint-cell-left{
        left: 22px;
        top: 8px;
        width: 24px;
        height: 24px;
        transform: none;
        webkit-transform: none;
      }
      .mint-cell-value{
        .mint-field-core{
          font: 16px '宋体',tahoma, Srial, helvetica, sans-serif !important;
          color: rgba(238, 238, 238, .1);
          font-weight: 100;
          border: none;
          border-bottom: 1px solid rgba(0, 0, 0, .1);
          padding: 11px 44px;
          color: #222;
        }
        .mint-field-state.is-success {
          color: $c1;
        }
        .mint-field-state.is-error {
          color: $c1;
        }
      }

    }
    a:nth-of-type(1){
      .mint-cell-left{
        background: url(../../images/mobile.png);
        background-size: contain;
      }
    }
    a:nth-of-type(2){
      .mint-cell-left{
        background: url(../../images/lock.png);
        background-size: contain;
      }
    }

    .pass-eye{
      position: absolute;
      right: 25px;
      top: -19px;
      width: 24px;
      height: 24px;
      background: url(../../images/eye-1.png) center no-repeat;
      background-size: contain;
    }

    .active{
      background: url(../../images/eye-2.png) center no-repeat;
      background-size: contain;
    }

    .mint-button {
      margin-top: 15px;
      color: #000;
      font-weight: 600;
      background-color: $c1!important;
    }

    .forget-box{
      display: flex;
      justify-content: space-between;
      margin: 15px 0 30px;
      font-size: 16px;
      .forget{
        color: $c2;
      }
      .register{
        font-weight: 600;
        color: $c1;
      }
    }

    .quick-login{
      display: flex;
      justify-content: center;
      align-items: center;
      .line{
        border-bottom: 1px solid #ccc;
        width: 25%;
        height: 1px;
      }
      .qlogin{
        width: 40%;
        height: 20px;
        text-align: center;
        font-size: 16px;
        line-height: 20px;
        color: $c3;
      }
    }

    .third-login{
      display: flex;
      justify-content: space-around;
      margin-top: 40px;
      div{
        width: 48px;
        height: 48px;
      }
      .wx{
        background: url(../../images/wx.png) no-repeat;
        background-size: contain;
      }
      .weibo{
        background: url(../../images/weibo.png) no-repeat;
        background-size: contain;
      }
      .qq{
        background: url(../../images/qq.png) no-repeat;
        background-size: contain;
      }
    }
  }
</style>
