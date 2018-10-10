<template>
  <div>
    <div class="mui-numbox" data-numbox-step='1' data-numbox-min='0' data-numbox-max='100'>
      <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
      <input class="mui-numbox-input" type="number"/>
      <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
    </div>
  </div>
</template>

<script>
  import mui from '../../assets/mui/js/mui.js'
  import '@/assets/mui/css/mui.css'

  export default {
    data () {
      return {
        name: 'muiNumbox',
      }
    },
    mounted (){
      console.log(111)
      //mui
      mui.plusReady(function(){
        console.log('123123')
        // window.mui.init()
        mui('mui-numbox').numbox()
      });

    },
  }
</script>

<style lang="scss" scoped>

</style>
