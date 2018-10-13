<template>
  <div class="takeout-shop">
    <mt-button icon="back" plain @click="$router.go(-1)"></mt-button>
    <!--头部-->
    <van-card
      :desc="getInfo()"
      :title="shop.shop_name"
      :thumb="root+shop.photo"
    />

    <!--tab 点餐 评价 商家-->
    <van-tabs v-model="active">
      <van-tab title="点餐">内容 1</van-tab>
      <van-tab title="评价">内容 2</van-tab>
      <van-tab title="商家">内容 3</van-tab>
    </van-tabs>
    <!--尾部-->
    <van-submit-bar
      :price="3050"
      button-text="结算"
      @submit="onSubmit"
    >
      <div class="icon32 icon-cart">
        <div class="num p24-tac">11</div>
      </div>
    </van-submit-bar>
  </div>
</template>

<script>
  export default {
    name: 'takeoutShop',
    data () {
      return {
        shopId: this.$route.params.shopId,
        shop: {},
        list: [],
        active: 0
      }
    },
    methods: {
      onSubmit() {
        // this.$toast('提示文案');('To be continued');
      },
      getShop() {
        this.$http
          .get(`ele/shopDetail?shop_id=${this.shopId}`)
          .then(res => {
            if(res.body.res == 1){
              this.shop = res.body.list
            }
          })
      },
      getList() {
        this.$http
          .get(`ele/shop?shop_id==${this.shopId}`)
          .then(res => {
            if(res.body.res == 1){
              this.list = res.body.list
            }
          })
      },
      getInfo() {
        return `¥${this.shop.since_money}起送/¥${this.shop.logistics}配送/${this.shop.distribution}m送达`
      }
    },
    created() {
      this.getShop()
    }
  }
</script>

<style lang="scss">
  .takeout-shop{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fff;

    /*tab*/
    .van-tabs--line {
      padding-top: 32px;
    }
    .van-tabs__wrap{
      /*position: fixed;*/
      /*top:47px;*/
      height: 33px!important;
      font-size: 16px;
      .van-tabs__nav {
        background: transparent;
        border:none;
      }
      .van-tabs__nav--line {
        height: 32px;
        padding-bottom: 0;
      }
      .van-tabs__line {
        z-index: 1;
        left: 0;
        bottom: 0;

        background-color: $c1;
      }
      .van-tab{
        height: 32px;
        line-height: 32px;
        color: #9b9b9b;
        padding: 0;
        border-bottom: 2px solid $bgc;
        background-color: transparent;
        &.van-tab--active{
          font-weight: 600;
          color: $c1;
          border-bottom: 2px solid $c1;
        }
      }

    }
    /*头部*/
    .van-card{
      height: 125px;
      padding-top: 35px;
      background-color: $c1;
      .van-card__thumb{
        top: 36px;
        left: 35px;
        width: 64px;
        height: 64px;
        .van-card__img{
          display: block;
          width: 64px;
          height: 64px;
          border-radius: 10px;
        }

      }
      .van-card__title{
        font-size: 16px;
        font-weight: 500;
      }
      .van-card__desc{
        padding-top: 5px;
        font-size: 13px;
      }
    }
    .van-card:not(:first-child) {
       margin-top: 0;
    }
    .mint-button{
      position: fixed;
      top: 2px;
      left: 2px;
      z-index: 9999;
      border: none;
      color: #fff;
    }
    /*底部结算通栏*/
    .van-submit-bar__bar{
      height: 48px;
      background-color: rgba(29,29,29,0.9);
      .icon-cart{
        position: relative;
        margin: 8px 8px 8px 20px;
        .num{
          position: absolute;
          top: -3px;
          left: 23px;
          width: 16px;
          height: 16px;
          line-height: 16px;
          font-size: 10px;
          color: #fff;
          border-radius: 50%;
          background: #ff8200;
        }
      }
      .van-button--danger {
        color: #000;
        background-color: $c1;
        border: none;
      }
      .van-submit-bar__text{
        padding-right: 50px;
        color: #fff;
        .van-submit-bar__price{
          color: #fff;
        }
      }
    }
  }
</style>
