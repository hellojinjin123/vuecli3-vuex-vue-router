<template>
  <div class="takeout-list">
    <div class="tl-items">

      <div class="item" v-for="item in list" @click="getShopDetail">
        <div class="left">
          <img class="l1" :src="getPic(item.photo)" alt="">
          <div class="l2">
            <div class="name text-overflow">{{item.shop_name}}</div>
            <div class="score-box">
              <div class="score"><van-rate v-model="score" :readonly="true" :size="15" /></div>
              <div class="month-sell">月销{{item.month_num}}单</div>
            </div>
            <div class="location text-overflow"><i class="van-icon van-icon-location"></i>{{item.addr}}</div>
          </div>
        </div>
        <div class="right">
          <div class="from">
            <em class="price">&yen;{{item.since_money}}</em>起送
          </div>
          <div class="deliver">
            <em class="d-price">&yen;{{item.logistics}}</em>配送费
          </div>
          <div class="distance">{{getDistance(item.distribution, item.distance)}}</div>
        </div>
      </div>

      <!--没有更多数据-->
      <div class="nm" >
        <div class="icon-nomore"></div>
        <div class="nomore">主人 宝宝已经加载完了哦...</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'takeoutList',
    data () {
      return {
        list: [],
        score: 4
      }
    },
    methods: {
      getShopList() {
        this.$http
          .get('ele/index?cate_id=&orderby=&payway=&tag_names=&p=1&page_num=20&lng=113.30764968&lat=23.1200491')
          .then(res => {
            this.list = res.body.list
          })
      },
      getDistance(m, d){
        d = (parseInt(d) / 1000).toFixed(0)
        return m+'m/'+d+'km'
      },
      getPic(pic){
        return this.root+ pic
      },
      getShopDetail() {
        this.$router.push('/service/takeoutList/takeoutShop')
      }
    },
    created() {
      this.getShopList()
    }
  }
</script>

<style lang="scss">
  .takeout-list{
    width: 100%;
    padding-top: $headerH;
    .tl-items{
      background-color: #fff;
      .item{
        display: flex;
        justify-content: space-between;
        padding: 8px;
        font-size: 12px;
        color: #696867;
        border-bottom: 1px solid $bgc;
        .left{
          display: flex;
          justify-content: space-between;
          .l1{
            display: block;
            width: 96px;
            height: 80px;
            padding-right: 8px;
          }
          .l2{
            .name{
              font-size: 16px;
              width: 130px;
              color: #000;
            }
            .score-box{
              display: flex;
              justify-content: space-between;
              margin: 10px 0;
              .month-sell{

              }
            }

            .location{
              position: relative;
              width: 130px;
              padding-left: 18px;
              .van-icon-location{
                position: absolute;
                top: 4px;
                left: 2px
              }
            }
          }
        }
        .right{
          text-align: right;
          .deliver{
            margin: 10px 0;
          }
          .price,.d-price{
            font-size: 16px;
            color: $c1;
            font-style: normal;
          }
        }

      }
    }
    .nm{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 48px;
    }
    .icon-nomore{
      width: 40px;
      height: 40px;
    }
    .nomore{
      text-align: center;
      color: #696867;
      font-size: 16px;
    }
  }
</style>
