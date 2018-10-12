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
    padding-top: $headerH;
    padding-bottom: $tabbarH;
  }
</style>
