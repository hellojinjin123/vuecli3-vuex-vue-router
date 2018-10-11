<template>
  <div class="st">
    <div class="st-header">
      <div class="top-tool">
        <div class="left" @click="$router.push('/stCenter')"></div>
      </div>
      <img :src="userinfo.face" :alt="userinfo.nickname" class="face">
      <p class="nickname">{{userinfo.nickname}}</p>
    </div>
    <div class="st-items">
      <a class="st-item" @click.prevent="goTodo('我的订单')">
        <div class="left">
          <div class="icon-1 icon-order"></div>
          <div class="name">我的订单</div>
        </div>
        <div class="icon-forward"></div>
      </a>
      <a class="st-item" @click.prevent="goTodo('我的钱包')">
        <div class="left">
          <div class="icon-1 icon-wallet"></div>
          <div class="name">我的钱包</div>
        </div>
        <div class="icon-forward"></div>
      </a>
      <a class="st-item" @click.prevent="goTodo('我的积分')">
        <div class="left">
          <div class="icon-1 icon-jifen"></div>
          <div class="name">我的积分</div>
        </div>
        <div class="icon-forward"></div>
      </a>
      <a class="st-item" @click.prevent="goTodo('我的收藏')">
        <div class="left">
          <div class="icon-1 icon-coll"></div>
          <div class="name">我的收藏</div>
        </div>
        <div class="icon-forward"></div>
      </a>
      <a class="st-item" @click.prevent="goTodo('社区中心')">
        <div class="left">
          <div class="icon-1 icon-community"></div>
          <div class="name">社区中心</div>
        </div>
        <div class="icon-forward"></div>
      </a>
      <a class="st-item" @click.prevent="goTodo('24+客服')">
        <div class="left">
          <div class="icon-1 icon-help"></div>
          <div class="name">24+客服</div>
        </div>
        <div class="icon-forward"></div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'setting',
    data () {
      return {
        userinfo: {},
        flag: true
      }
    },
    methods: {
      goTodo(t) {
        // this.$router.push({ name: '/todo', params: { subTitle: t }})
        // this.$router.push({ path: 'todo', query: { subTitle: t }})
        this.$router.push({ name: 'todo', params: {  subTitle: t }})
      }
    },
    created(){
      this.userinfo = JSON.parse(localStorage.getItem('userinfo'))
    }
  }
</script>

<style lang="scss" scoped>
  .st{
    .st-header{
      height: 210px;
      background: url(../../images/bg.png);
      background-size: cover;
      .top-tool{
        display: flex;
        justify-content: flex-end;
        .left{
          width: 32px;
          height: 32px;
          margin: 8px;
          margin-bottom: 0;
          background: url(../../images/setting.png) no-repeat;
          background-size: contain;
        }
      }
      .face{
        display: block;
        margin: 0 auto;
        width: 96px;
        height: 96px;
        border-radius: 50%;
      }
      .nickname{
        margin-top: 20px;
        color: #fff;
        font-size: 16px;
        text-align: center;
      }
    }

    .st-items{
      background: #fff;
      & .active{
        background: #eee;
      }
      .st-item{
        -webkit-tap-highlight-color:rgba(0, 0, 0, 0.2)!important; /*去除点击高亮的颜色*/
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 48px;
        line-height: 48px;
        border-bottom: 1px solid #eee;
        font-size: 16px;
        .left{
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .icon-1{
          width: 32px;
          height: 32px;
          margin: 0 8px;
        }
        .icon-order{
          background: url(../../images/icon-order.png) no-repeat;
          background-size: contain;
        }
        .icon-wallet{
          background: url(../../images/pocket.png) no-repeat;
          background-size: contain;
        }
        .icon-jifen{
          background: url(../../images/jifen.png) no-repeat;
          background-size: contain;
        }
        .icon-coll{
          background: url(../../images/coll.png) no-repeat;
          background-size: contain;
        }
        .icon-community{
          background: url(../../images/community.png) no-repeat;
          background-size: contain;
        }
        .icon-help{
          background: url(../../images/help.png) no-repeat;
          background-size: contain;
        }
        .icon-forward{
          width: 16px;
          height: 16px;
          margin-right: 8px;
          /*background: url(../../images/forward.png) no-repeat;*/
          /*background-size: contain;*/
        }
      }
    }

  }
</style>
