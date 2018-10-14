<template>
  <div class="full-mask" @click="$emit('hideCartMask')">

  </div>
</template>

<script>
  export default {
    name: 'FullMask',
    data () {
      return {
        list: []
      }
    },
  }
</script>

<style lang="scss" scoped>
  .full-mask{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.4);
  }
</style>
