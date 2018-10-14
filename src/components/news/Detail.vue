<template>
  <div class="detail">
    <h1>detail</h1>
  </div>
</template>

<script>
  export default {
    name: 'Detail',
    data () {
      return {
        id: this.$route.params.id,
        type: this.$route.params.type
      }
    }
  }
</script>

<style lang="scss" scoped>
  .detail{
    padding-top: 48px;
  }
</style>
