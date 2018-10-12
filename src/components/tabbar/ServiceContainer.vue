<template>
  <div class="service-container">
    <van-row class="cate-wrap">
      <van-col span="6" v-for="item in list">
        <van-row class="item" :cate="item.cate" ref="item">
          <van-col span="24" :class="item.thumb" ></van-col>
          <van-col span="24" class="p24-tac">{{item.cate}}</van-col>
        </van-row>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [
          {cate: '入住24+', thumb: 'icon32 icon-fw01'},
          {cate: '社区商家', thumb: 'icon32 icon-fw02'},
          {cate: '生活服务', thumb: 'icon32 icon-fw03'},
          {cate: '报装报修', thumb: 'icon32 icon-fw04'},
          {cate: '跳蚤市场', thumb: 'icon32 icon-fw05'},
          {cate: '公共空间', thumb: 'icon32 icon-fw06'},
          {cate: '外卖', thumb: 'icon32 icon-fw07'},
        ],
      };
    },
    methods: {
      goNext() {
        console.log(12)
      }
    },
    mounted() {
      // 直接点击不起效果  所以操作dom
      var items = this.$refs.item
      items.forEach(item => {
        item.$el.addEventListener('click', ()=>{
          if(item.$attrs.cate == '外卖'){
            this.$router.push('/')
          }else{
            this.$router.push({ name: 'todo', params: {  subTitle: item.$attrs.cate }})
          }
        }, false)
      })

    }
  }
</script>

<style lang="scss">
  .service-container{
    width: 100%;
    padding-top: $headerH;
    .cate-wrap{
      background-color: #fff;
    }
    .item{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px 0;
    }
    .p24-tac{
      padding-top: 5px;
    }

  }
</style>
