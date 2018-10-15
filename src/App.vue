<template>
  <div class="p24-container">
    <!--header-->
    <mt-header fixed :title="title" v-if="show">
      <a href="" slot="left" @click.prevent="$router.go(-1)">
        <mt-button icon="back" v-if="showBackBtn"></mt-button>
      </a>
    </mt-header>
    <!--main container router-view-->
    <transition>
      <router-view :route="routeFlag" ref="container"></router-view>
    </transition>
    <!--footer-->
    <mt-tabbar v-model="selected" v-if="showFooterTab">
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
        title: '',
        flag:[
          {p24: false},
          {love: false},
          {home: false},
          {user: false},
        ],
        routeFlag: false,
        show: true,
        showBackBtn: false,
        showFooterTab: true,
      }
    },
    methods: {
      tabbarFlag({p24=false, love = false, home = false, user = false} = {}) {
        this.flag.p24 = p24
        this.flag.love = love
        this.flag.home = home
        this.flag.user = user
      },
      /*
        * header: show
        * btn in header: showBackBtn
        * title in header: title
        * showFooterTab:  footer tab
        * */
      routerWatch(nVal,oVal) {
        // 默认设置
        this.show = true
        this.showBackBtn = false
        this.showFooterTab = true

        // 路由个性设定
        switch (nVal) {
          case 'index':
            this.title = '社区广场'
            this.selected = '首页'
            this.tabbarFlag({p24: true})
            break
          case 'detail':
            if(this.$route.params.type == 1){ //activity_id
              this.title = '活动详情'
            }else{
              this.title = '话题详情'
            }
            this.showBackBtn = true
            this.selected = '首页'
            this.showFooterTab = false
            this.tabbarFlag({p24: true})
            break
          case 'service':
            this.title = '社区服务'
            this.selected = '服务'
            this.tabbarFlag({love: true})
            break
          case 'takeoutList':
            this.title = '外卖'
            this.showBackBtn = true
            this.showFooterTab = false
            this.selected = '服务'
            this.tabbarFlag({love: true})
            break
          case 'takeoutShop':
            this.show = false
            this.showFooterTab = false
            this.selected = '服务'
            this.tabbarFlag({love: true})
            break
          case 'home':
            this.title = '我家'
            this.selected = '我家'
            this.tabbarFlag({home: true})
            // this.showFooterTab = false
            break
          case 'user':
            this.show = false
            this.title = '用户中心'
            this.selected = '我的'
            this.tabbarFlag({user: true})
            break
          case 'login':
            this.show = false
            break
          case 'stCenter':
            this.title = '设置'
            this.showBackBtn = true
            this.showFooterTab = false
            break
          case 'todo':
            this.title += '-'+this.$route.params.subTitle
            this.showBackBtn = true
            this.showFooterTab = false
            break
          default:
            this.showBackBtn = false
        }
        // 图片预览关闭
        if(window.IPre) window.IPre.close()

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
      },
      '$route.name' (nVal, oVal) {
        this.routerWatch(nVal, oVal)
      }
    },
    created() {
      // this.$router.push('/')
      this.$router.push(this.$route.path)
      this.routerWatch(this.$route.name) // 手动触发路由检测path变化函数
    },
    mounted() {
      // this.selected = '首页'
      // this.title = '社区广场'


      document.addEventListener('touchstart',function (event) {
        if(event.touches.length>1){
          event.preventDefault();
        }
      })
      var lastTouchEnd=0;
      document.addEventListener('touchend',function (event) {
        var now=(new Date()).getTime();
        if(now-lastTouchEnd<=300){
          event.preventDefault();
        }
        lastTouchEnd=now;
      },false)
    }

  }
</script>

<style lang="scss">
  .mint-header{
    &.is-fixed{
      z-index: 9999;
    }
    height: $headerH;
    background: url(images/bg.png) center repeat-x;
    .mint-header-title{
      font-size: 16px;
      font-weight: 600;
    }
  }
  .mint-tabbar{
    position: fixed;
    height: $tabbarH;
    min-height: $tabbarH;
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
        width: 24px;
        height: 24px;
      }
      .mint-tab-item-icon {
        width: 24px;
        height: 24px;
        margin: 0 auto;
      }
      .mint-tab-item-label{
        display: inline-block;
        /*padding-top: r(10);*/
        /*padding-left: r(7);*/
        font-size: 12px;
        letter-spacing: 1px;
      }
    }
  }
  .icon-success{
    display: block;
    margin: 0 auto;
    width: 30px;
    height: 30px;
    background: url(images/nomore.png) no-repeat;
    background-size: contain;
  }

</style>


