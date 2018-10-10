<template>
  <div class="home-container">
    <h1>home</h1>

      <mui-numbox></mui-numbox>
  </div>

</template>

<script>
  import muiNumbox from '../subcomponents/muiNumbox'
  export default {
      components:{
        muiNumbox
      }
  }
</script>

<style scoped lang="scss">
  .home-container{
    /*position: absolute;*/
    /*width: 100%;*/
    /*height: 100%;*/
    padding-top: r(48);
    padding-bottom: r(63);
  }
</style>