<template>
  <div class="st-center">
    <list></list>
    <mt-button size="large" @click="logout">退出登录</mt-button>
  </div>
</template>

<script>
  import List from '../subcomponents/List'
  import { Toast } from 'mint-ui';
  export default {
    name: 'stCenter',
    data () {
      return {
        list: []
      }
    },
    methods: {
      logout() {
        localStorage.clear()
        Toast({
          message: '再见了 亲',
          position: 'bottom',
          iconClass: 'icon-success'
        })
        this.$router.push('/user/login')
      }
    },
    components: {
      List
    }
  }
</script>

<style lang="scss">
  .st-center{
    padding-top: 58px;
    /*position: absolute;*/
    width: 100%;
    height: 100%;
    .mint-button{
      position: fixed;
      bottom: 0;
      left: 0;
      height: 48px;
      background-color: #fff;
      .mint-button-text{
        color: #000;
        font-size: 16px;
        font-weight: 600;
      }
    }
  }
</style>
