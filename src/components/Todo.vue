<template>
  <div class="todo">
    <img src="../images/avatar.png" alt="" class="td-pic">
    <h3 class="td-title">To be continued ...</h3>
  </div>
</template>

<script>
  export default {
    name: 'Todo',
    data () {
      return {
        list: []
      }
    }
  }
</script>

<style lang="scss" scoped>
  .todo{
    padding-top: 180px;
    height: 100%;
    width: 100%;
  }
  .td-title{
    padding-top: 20px;
    text-align: center;
  }
  .td-pic{
    display: block;
    margin: 0 auto;
    border-radius: 50%;
  }
</style>
