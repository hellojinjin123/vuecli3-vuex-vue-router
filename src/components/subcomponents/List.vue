<template>
  <div class="list">
    <a href="" v-for="item in list" class="list-item" @click.prevent="goTodo(item.name)">
      <div class="left">
        <span :class="['icon-1', item.iconClass]"></span>
        <span class="name">{{item.name}}</span>
      </div>
      <div class="right">
        <span class="value">{{item.value}}</span>
        <span class="icon-forward"></span>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'List',
    data () {
      return {
        list: [
          {name: '版本号', value: 'v1.0.0',iconClass: 'icon-sz-01'},
          {name: '账号设置', value: '',iconClass: 'icon-sz-02'},
          {name: '给24+评分', value: '',iconClass: 'icon-sz-03'},
          {name: '清除缓存', value: '',iconClass: 'icon-sz-04'},
          {name: '关于24+', value: '',iconClass: 'icon-sz-05'},
        ]
      }
    },
    methods: {
      goTodo(t) {
        this.$router.push({ name: 'todo', params: {  subTitle: t }})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .list{
    .list-item{
      display: flex;
      justify-content: space-between;
      /*align-items: center;*/
      height: 48px;
      margin-bottom: 10px;
      font-size: 16px;
      background: #fff;
      .left{
        display: flex;
        align-items: center;
        .icon-1{
          width: 32px;
          height: 32px;
          margin: 0 5px;
        }
      }
      .right{
        display: flex;
        align-items: center;
        .icon-forward{
          width: 16px;
          height: 16px;
          margin-right: 8px;
        }
      }
    }
  }
</style>
