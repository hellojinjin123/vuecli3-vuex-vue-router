<template>
  <div class="user-container">
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <li>12312</li>
      <li>12312</li>
      <li>123啊12</li>
      <li>12312</li>
      <li>12312</li>
      <li>12312</li>
      <li>12312</li>
      <li>12312</li>
      <li>12312</li>
      <li>12312</li>
      <li>12312</li>
      <li>12312</li>
      <li>12312</li>
      <li>12312</li>
      <li>12312</li>
      <li>1231阿斯蒂芬2</li>
      <li>12312</li>
      <li>12312</li>
      <li>12312</li>
      <li>12312</li>
      <li>12312</li>
      <li>12312</li>
      <li>12312</li>
      <li>12312</li>
      <li>12312</li>
      <li>1231阿斯蒂芬2</li>
      <li>12312</li>
      <li>12312</li>
      <li>12312</li>
      <li>12312</li>
      <li>12312</li>
      <li>12312</li>
      <li>12312</li>
      <li>12312</li>
      <li>12312</li>
      <li>12312</li>
      <li>12312</li>
      <li>12312</li>
      <li>12312</li>
      <li>12312</li>
      <li>1阿斯蒂芬2312</li>
      <li>12312</li>
      <li>12312</li>
      <li>12312</li>
      <li>12312</li>
      <li>12312</li>
      <li>12312</li>
      <li>12312</li>
      <li>12312</li>
      <li>12312</li>
      <li>12312</li>
      <li>12312</li>
      <li>12312</li>
    </ul>
  </div>
</template>

<script>
  export default {
    methods: {
      loadMore() {
        this.loading = true;
        setTimeout(() => {

          this.loading = false;
        }, 2500);
      }
    }
  }
</script>

<style scoped lang="scss">
  .user-container{
    /*position: absolute;*/
    /*width: 100%;*/
    /*height: 100%;*/
    padding-top: r(48);
    padding-bottom: r(63);
  }
</style>