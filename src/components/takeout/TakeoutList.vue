<template>
  <div class="takeout-list">
    <van-card
      num="2"
      tag="标签"
      price="2.00"
      desc="描述信息"
      title="商品标题"
    >
      <div slot="footer">
        <van-button size="mini">按钮</van-button>
        <van-button size="mini">按钮</van-button>
      </div>
    </van-card>
  </div>
</template>

<script>
  export default {
    name: 'takeoutList',
    data () {
      return {
        list: []
      }
    },
    mounted() {
      console.log(this)
    }
  }
</script>

<style lang="scss" scoped>

</style>
