<template>
  <div class="p24-container">
    <!--header-->
    <mt-header fixed title="社区广场"></mt-header>
    <!--main container router-view-->
    <transition>
      <router-view></router-view>
    </transition>
    <!--footer-->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="首页" href="#/index">
        <img slot="icon" src="./images/24.png" v-show="!flag.p24">
        <img slot="icon" src="./images/24ing.png" v-show="flag.p24">
        首页
      </mt-tab-item>
      <mt-tab-item id="服务" href="#/service">
        <img slot="icon" src="./images/love.png" v-show="!flag.love">
        <img slot="icon" src="./images/loveing.png" v-show="flag.love">
        服务
      </mt-tab-item>
      <mt-tab-item id="我家" href="#/home">
        <a href=""></a>
        <img slot="icon" src="./images/home.png" v-show="!flag.home">
        <img slot="icon" src="./images/homeing.png" v-show="flag.home">
        我家
      </mt-tab-item>
      <mt-tab-item id="我的" href="#/user">
        <img slot="icon" src="./images/user.png" v-show="!flag.user">
        <img slot="icon" src="./images/usering.png" v-show="flag.user">
        我的
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: '',
        flag:[
          {p24: true},
          {love: false},
          {home: false},
          {user: false},
        ]
      }
    },
    watch: {
      selected(newVal) {
        switch (newVal) {
          case '首页':
            this.flag.p24 = true
            this.flag.love = this.flag.home = this.flag.user = false
            break
          case '服务':
            this.flag.love = true
            this.flag.p24 = this.flag.home = this.flag.user = false
            break
          case '我家':
            this.flag.home = true
            this.flag.p24 = this.flag.love = this.flag.user = false
            break
          default:
            this.flag.user = true
            this.flag.p24 = this.flag.love = this.flag.home = false
        }
      }
    },
    mounted() {
      this.selected = '首页'
    },
  }
</script>

<style lang="scss">
  .mint-header{
    &.is-fixed{
      z-index: 9999;
    }
    height: r(48);
    background: url(images/bg.png) center repeat-x;
    .mint-header-title{
      font-size: r(16);
      font-weight: 600;
    }
  }
  .mint-tabbar{
    position: fixed;
    height: r(63);
    min-height: 63px;
    background: url(images/bg.png) center repeat-x;
    z-index: 9999;
    .mint-tab-item.is-selected {
      background-color: transparent;
      color: $c1;
    }
    .mint-tab-item{
      text-align: center;
      color: $c2;
      img{
        width: r(24);
        height: r(24);
      }
      .mint-tab-item-icon {
        width: r(24);
        height: r(24);
        margin: 0 auto r(5);
      }
      .mint-tab-item-label{
        display: inline-block;
        /*padding-top: r(10);*/
        /*padding-left: r(7);*/
        font-size: r(12);
        letter-spacing: 1px;
      }
    }
  }


</style>


