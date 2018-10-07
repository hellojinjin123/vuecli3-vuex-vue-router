<template>
  <div class="service-container">
    <mt-navbar v-model="selected" fixed ref="mt-navbar">
      <mt-tab-item id="1">热门</mt-tab-item>
      <mt-tab-item id="2">最新</mt-tab-item>
      <mt-tab-item id="3">社圈</mt-tab-item>
      <mt-tab-item id="4">能值</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        asdf
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :title="'测试 ' + n" />
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
  export default {
    data() {
      return{
        selected: '1'
      }
    }
  }
</script>

<style scoped lang="scss">
  .service-container{
    /*position: absolute;*/
    /*width: 100%;*/
    /*height: 100%;*/
    padding-top: r(48);
    padding-bottom: r(63);
  }
</style>