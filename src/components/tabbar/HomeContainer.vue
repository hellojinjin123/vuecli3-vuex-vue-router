<template>
  <div class="home-container">
    <div class="slider">
      <van-swipe >
        <van-swipe-item><img :src="root+'2017/04/01/58df56861cea1.jpg'" @click="preview()" /></van-swipe-item>
        <van-swipe-item><img :src="root+'2017/04/01/58df56897199c.jpg'" @click="preview()" /></van-swipe-item>
        <van-swipe-item><img :src="root+'2017/04/01/58df568c90fd3.jpg'" @click="preview()" /></van-swipe-item>
        <van-swipe-item><img :src="root+'2017/04/01/58df568fe31b9.jpg'" @click="preview()" /></van-swipe-item>
      </van-swipe>
    </div>
    <!--没有更多数据-->
    <div class="mui-table-view-cell mui-media">
      <div class="icon-nomore"></div>
      <div class="nomore">点击图片全屏预览..</div>
    </div>
  </div>

</template>

<script>
  import { ImagePreview,Swipe, SwipeItem } from 'vant'
  export default {
    name: 'Home',
    methods:{
      preview() {
        window.IPre = ImagePreview([
          this.root+ '2017/04/01/58df56861cea1.jpg',
          this.root+ '2017/04/01/58df56897199c.jpg',
          this.root+ '2017/04/01/58df568c90fd3.jpg',
          this.root+ '2017/04/01/58df568fe31b9.jpg',
        ]);
      }
    },
    mounted() {
      // this.preview()
    }
  }
</script>

<style scoped lang="scss">
  .home-container{
    /*position: absolute;*/
    width: 100%;
    /*height: 100%;*/
    padding-top: $headerH;
    padding-bottom: $tabbarH;
    .van-notice-bar{
      height: 24px;
    }
    .van-swipe-item{
      height: 211px!important;
    }
    .icon-nomore{
      width: r(96);
      height: r(96);
      background: url(../../images/nomore.png) no-repeat;
      background-size: contain;
      margin: 0 auto;
    }
    .nomore{
      text-align: center;
      color: #696867;
      font-size: 16px;
    }
  }
</style>
