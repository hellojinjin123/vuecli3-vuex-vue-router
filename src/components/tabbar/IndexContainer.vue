<template>
  <div class="index-container">
    <List></List>
  </div>
</template>

<script>
  import List from '../news/List'
  export default {
    data() {
      return{}
    },
    components: {
      List
    }
  }
</script>

<style scoped lang="scss">
  .index-container{
    padding-bottom: r(63);
  }
</style>