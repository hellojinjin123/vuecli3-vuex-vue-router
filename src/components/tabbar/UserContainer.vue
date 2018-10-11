<template>
  <div class="user-container">
    <setting></setting>
  </div>
</template>

<script>
  import setting from '../setting/Setting'
  export default {
    components:{
      setting
    },
    methods: {}
  }
</script>

<style scoped lang="scss">
  .user-container{
    position: absolute;
    width: 100%;
    height: 100%;
    padding-bottom: 63px;
  }
</style>
