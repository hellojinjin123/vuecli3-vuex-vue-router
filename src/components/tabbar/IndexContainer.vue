<template>
  <div id="index-container">
    <mt-navbar v-model="selected" fixed ref="mtNavbar">
      <mt-tab-item id="1">热门</mt-tab-item>
      <mt-tab-item id="2">最新</mt-tab-item>
      <mt-tab-item id="3">社圈</mt-tab-item>
      <mt-tab-item id="4">能值</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <List :type="'hot'"></List>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <List :type="'new'"></List>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :title="'选项 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <mt-cell v-for="n in 6" :title="'选项 ' + n" />
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  import List from '../news/List'
  export default {
    data() {
      return{
        selected: '1'
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
    padding-top: 80px;
    padding-bottom: 63px;
    .mint-navbar{
      height: 32px;

      background: url(../../images/bg.png) right repeat-x;
      &.is-fixed{
        top: 48px;
      }
      .mint-tab-item{
        color: #9b9b9b;
        padding: 0;
        &.is-selected{
          border-bottom: 3px solid $c1;
        }
        .mint-tab-item-label {
          color: inherit;
          font-size: 16px;
          line-height: 32px;
        }
      }

    }
  }
</style>
