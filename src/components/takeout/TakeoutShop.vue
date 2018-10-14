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
      <van-tab title="点餐">
        <cart :list="list"></cart>
      </van-tab>
      <van-tab title="评价">内容 2</van-tab>
      <van-tab title="商家">内容 3</van-tab>
    </van-tabs>
    <!--尾部-->
    <van-submit-bar
      :price="$store.getters.getTolalPrice"
      button-text="购物车"
      @submit="onSubmit"
    >
      <div class="icon32 icon-cart" @click="hideCartMask">
        <div class="num p24-tac">{{getAllCount}}</div>
      </div>
    </van-submit-bar>

    <!--mask-->
    <full-mask v-show="showMask" @hideCartMask="hideCartMask"></full-mask>

    <!--cart-->
    <transition name="cart">
      <div class="cart" v-show="showMask">
        <div class="heading">
          <span class="title">去结算</span>
          <span class="van-icon van-icon-delete">清空</span>
        </div>
        <div class="products">
          <div class="product van-hairline--bottom" v-for="product in $store.getters.getCart">
            <div class="left">
              <div class="name">{{product.product_name}}</div>
              <div class="price">&yen;{{product.price}}</div>
            </div>
            <div class="num-box">
              <span class="jian" @tap="removeFromCart(product)">－</span>
              <span class="num">{{$store.getters.getCount[product.product_id] || 0}}</span>
              <span class="jia" @tap="addToCart(product)">＋</span>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Cart from '../cart/Cart'
  import FullMask from '../subcomponents/FullMask'
  export default {
    name: 'takeoutShop',
    data () {
      return {
        shopId: this.$route.params.shopId,
        shop: {},
        list: [],
        active: 0,
        showMask: false
      }
    },
    methods: {
      onSubmit() {
        this.$toast('To be continued ...');
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
          .get(`ele/shop?shop_id=${this.shopId}`)
          .then(res => {
            if(res.body.res == 1){
              this.list = res.body.list
            }
          })
      },
      getInfo() {
        return `¥${this.shop.since_money}起送/¥${this.shop.logistics}配送/${this.shop.distribution}m送达`
      },
      hideCartMask() {
        if(!this.showMask && this.$store.getters.getCart.length === 0){
          return false
        }
        this.showMask = !this.showMask
      },
      addToCart(p) {
        setTimeout(() => {
          this.$store.commit('addToCart', p)
        },10)

      },
      removeFromCart(p){
        setTimeout(() => {
          this.$store.commit('removeFromCart', p)
        },10)

      }
    },
    components: {
      Cart,
      FullMask
    },
    computed: {
      // 使用对象展开运算符将 getter 混入 computed 对象中
      ...mapGetters([
        'getAllCount',
      ])
    },
    watch:{
      '$store.getters.getCart': function(n, o){
        if(n.length == 0) this.showMask = false
      }
    },
    created() {
      this.getShop()
      this.getList()
    }
  }
</script>

<style lang="scss">
  .cart-enter,.cart-leave-to{
    transform: translateY(100%);
    opacity: 0;
  }
  .cart-enter-active,.cart-leave-active{
    transition: all .3s ease;
  }

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
      position: fixed;
      top:125px;
      z-index: 8888;
      height: 33px!important;
      font-size: 16px;
      background-color: #fff;
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
        height: 100%;
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
      position: fixed;
      z-index: 8888;
      width: 100%;
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
    .van-submit-bar {
      z-index: 10002!important;
    }
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
    /*购物车*/
    .cart{
      position: fixed;
      bottom: 48px;
      left: 0;
      z-index: 10001;
      width: 100%;
      color: #9b9b9b;
      /*height: 154px;*/
      .heading{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 48px;
        font-size: 16px;
        background-color: #eee;
        padding: 8px;
        .van-icon-delete{
          display: flex;
          justify-content: center;
          align-items: center;
          height: 48px;
          line-height: 48px;
          &::before{
            margin-right: 5px;
            color: $c1;
          }
        }
      }
      .products{
        padding: 8px 8px 0 8px;
        background-color: #fff;
        font-size: 15px;
        .product{
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 48px;
          .left{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .name{

            }
            .price{
              padding-left: 20px;
              color: $c1;
            }
          }
          .num-box{
            display: flex;
            justify-content: center;
            /*align-items: center;*/
            /*position: absolute;*/
            /*bottom: 4px;*/
            /*left: 48px;*/
            .num{
              padding: 0 5px;
              color: #222;
            }
            .jia,.jian{
              display: flex;
              justify-content: center;
              align-items:center;
              width: 20px;
              height: 20px;
              font-size: 16px;
              line-height: 20px;
              font-weight: 600;
              border-radius: 50%;
              border: 2px solid $c1;
            }
            .jian{
              color: $c1;
              background-color: #fff;
            }
            .jia{
              color: #fff;
              background-color: $c1;
            }
          }
        }
      }
    }
  }
</style>
