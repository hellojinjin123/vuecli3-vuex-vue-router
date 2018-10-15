<template>
  <div class="cart-wrap">
    <div class="ct-cates-wrap">
      <ul class="ct-cates">
        <li class="ct-cate active" @tap="showProducts('all')" data-a="all">全部</li>
        <li class="ct-cate" v-for="cate in list.cate" @tap="showProducts(cate.cate_id)" :data-a="cate.cate_id" >{{cate.cate_name}}</li>
      </ul>
    </div>
    <div class="ct-products-scroll-wrap">
      <div class="ct-products-wrap" id="all">
        <!--v-for="cate in this.list.cates" :key="cate.cate_id"-->
        <div class="ct-products-box" v-for="cate2 in list.cate" cate :id="cate2.cate_id">
          <div class="ct-products-cate">{{cate2.cate_name}}</div>
          <div class="ct-products">
            <div class="ct-product van-hairline--bottom" v-for="product in list.product" v-if="cate2.cate_id == product.cate_id">
              <div class="photo-box"><img class="photo" :src="root+product.photo" alt=""></div>
              <div class="detail">
                <span class="name van-ellipsis">{{product.product_name}}</span>
                <span class="star">★★★★☆</span>
                <span class="month-sell">月售{{product.month_num}}单</span>
                <span class="price">&yen;{{product.price}}</span>
                <div class="num-box">
                  <span class="jian" @tap="removeFromCart(product)">－</span>
                  <span class="num">{{$store.getters.getCount[product.product_id] || 0}}</span>
                  <span class="jia" @tap="addToCart(product)">＋</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    name: 'Cart',
    props: ['list'],
    data () {
      return {
        scroll: {},
      }
    },
    methods: {
      showProducts(cateId) {
        // 对应分类 添加类 .active
        document.querySelectorAll('.ct-cate').forEach(cate => {
          cate.className = 'ct-cate'
          if(cate.dataset.a == cateId){
            cate.classList.add('active')
          }
        })
        // 右侧产品跳转对应栏目
        setTimeout(() => {
          this.scroll.scrollToElement(`#${cateId}`, 1000)
        }, 100)
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

      },
    },
    mounted() {
      new BScroll('.ct-cates-wrap', {
        // better-scroll 会将点击事件去掉，要在这里开启，同时点击在PC 会被执行两次，要在这里控制
        tap: true
      })
      this.scroll = new BScroll('.ct-products-scroll-wrap', {
        // better-scroll 会将点击事件去掉，要在这里开启，同时点击在PC 会被执行两次，要在这里控制
        tap: true
      })
    }
  }
</script>

<style lang="scss" scoped>
  .cart-wrap{
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    top: 157px;
    left: 0;
    height: 100%;
    font-size: 16px;
    background-color: #fff;
    /*cates*/
    .ct-cates-wrap{
      flex: 1;
      height: 100%;
      overflow-y: hidden;
      .ct-cates{
        letter-spacing: 2px;
        padding-bottom: 210px;
        .ct-cate{
          height: 50px;
          line-height: 50px;
          text-align: center;
          border-bottom: 1px solid #fff;
          background-color: #fbfbfb;
          &.active{
            color: #ff8200;
            border-left: 2px solid $c1;
            background-color: #fff;
          }
        }
      }
    }
    /*products*/
    .ct-products-scroll-wrap{
      flex: 2;
      /*height: 500px;*/
      overflow-y: hidden;
    }
    .ct-products-wrap{
      padding-bottom: 210px;
      .ct-products-cate{
        line-height: 20px;
        font-size: 12px;
        color: #333;
        padding-left: 10px;
        border-left: 2px solid $c1;
        background-color: rgba(240,240,240,0.2);
      }
      .ct-product{
        display: flex;
        justify-content: flex-start;
        height: 100px;
        padding: 8px;
        .photo-box{
          width: 80px;
          .photo{
            display: block;
            width: 80px;
            height: 80px;
            margin: 0 auto;
          }
        }
        .detail{
          position: relative;
          display: flex;
          flex-direction: column;
          font-size: 14px;
          margin-left: 5px;
          /*overflow-x: hidden;*/
          .name{
            display: block;
            overflow: hidden;
          }
          .star{
            color: $c1;
          }
          .month-sell{
            color: #bbb;
          }
          .price{
            color: #ff8200;
          }
          .num-box{
            display: flex;
            justify-content: center;
            /*align-items: center;*/
            position: absolute;
            bottom: 4px;
            left: 48px;
            .num{
              padding: 0 3px;
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
