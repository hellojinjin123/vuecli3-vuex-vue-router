<template>
  <div id="index-container">
    <!--<mt-navbar v-model="selected" fixed ref="mtNavbar">-->
      <!--<mt-tab-item id="1">热门</mt-tab-item>-->
      <!--<mt-tab-item id="2">最新</mt-tab-item>-->
      <!--<mt-tab-item id="3">社圈</mt-tab-item>-->
      <!--<mt-tab-item id="4">能值</mt-tab-item>-->
    <!--</mt-navbar>-->


    <van-tabs v-model="active" swipeable>
      <van-tab title="热门">
        <List :type="'hot'" :key="1"></List>
      </van-tab>
      <van-tab title="最新">
        <List :type="'new'" :key="2"></List>
      </van-tab>
      <van-tab title="社圈">内容 3</van-tab>
      <van-tab title="能值">内容 4</van-tab>
    </van-tabs>



    <!--&lt;!&ndash; tab-container &ndash;&gt;-->
    <!--<mt-tab-container v-model="selected">-->
      <!--<mt-tab-container-item id="1">-->
        <!--<List :type="'hot'" :key="1"></List>-->
      <!--</mt-tab-container-item>-->
      <!--<mt-tab-container-item id="2">-->
        <!--<List :type="''" :key="2"></List>-->
      <!--</mt-tab-container-item>-->
      <!--<mt-tab-container-item id="3">-->
        <!--<mt-cell v-for="n in 6" :title="'选项 ' + n" />-->
      <!--</mt-tab-container-item>-->
      <!--<mt-tab-container-item id="4">-->
        <!--<mt-cell v-for="n in 6" :title="'选项 ' + n" />-->
      <!--</mt-tab-container-item>-->
    <!--</mt-tab-container>-->
  </div>
</template>

<script>
  import List from '../news/List'
  export default {
    data() {
      return{
        selected: '1',
        active: 0
      }
    },
    props: ['route'],
    components: {
      List
    },
    mounted() {
      // console.log(this.route)
    }
  }
</script>

<style  lang="scss">

  #index-container{
    position: absolute;
    width: 100%;
    padding-top: 48px;
    padding-bottom: 63px;
    .van-tabs--line {
      padding-top: 32px;
    }
    .van-tabs__wrap{
      position: fixed;
      top:47px;
      height: 33px;
      border:none;
      background: url(../../images/bg.png) right repeat-x;
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
        background-color: transparent;
      }

    }
  }
</style>
