<template>
  <div class="news-list">
    <van-list
      v-model="loading"
      :finished="finished"
      @load="onLoad"

      :offset="1"
      :key="type"
    >
      <!--数据区域-->
      <div class="mui-table-view-cell mui-media" v-for="item in list" @click="goToDetail(item)" >
        <a href="javascript:;" class="">
          <img class="mui-media-object mui-pull-left" :src="getFace(item.face)" >
          <div class="mui-media-body">
            <div class="clearfix mui-media-body-title">
              <div class="clearfix">
                <span class="news-list-name">{{item.nickname}}</span><i class="icon-home"></i>
              </div>
              <div class="news-list-date">{{item.how_long}}</div>
            </div>
            <div class="news-list-type">{{item.type|changeType}}</div>

          </div>
        </a>
        <div class="news-list-title">{{item.title}}</div>
        <a href="javascript:;" class="news-list-link"><img v-lazy="getFirstPic(item.pic)" alt="" ></a>
        <div class="bottom">
          <div class="bot">
            <span class="icon32 icon-bt1"></span>
            <span class="text">123</span>
          </div>
          <div class="bot">
            <span class="icon32 icon-bt2"></span>
            <span class="text">10</span>
          </div>
          <div class="bot">
            <span class="icon32 icon-bt3"></span>
            <span class="text">0</span>
          </div>
        </div>
      </div>
      <!--没有更多数据-->
      <div class="mui-table-view-cell mui-media" v-if="finished">
        <div class="icon-nomore"></div>
        <div class="nomore">这里还是空空如也..</div>
      </div>
    </van-list>
  </div>

</template>

<script>
  export default {
    name: 'newslist',
    props:['type'],
    data () {
      return {
        page: 1,
        pageNum: 1,
        list: [],
        loading: false,
        finished: false,
      }
    },
    methods: {
      onLoad() {
        // 异步更新数据
        setTimeout(() => {
          this.getList((data)=>{
            // 加载状态结束
            this.loading = false;

            // 数据全部加载完成
            if (data.res != 1) {
              this.finished = true;
            }
          })

        }, 500);
      },
      getList(callback) {
        this.$http
          .get('activity/grouplist?type='+this.type+'&p='+this.page+'&page_num='+this.pageNum)
          .then(response => {
            // success callback
            if(response.body.res == 1){// 获得数据
              this.list = this.list.concat(response.body.list)
              this.page++;
            }
            callback && callback(response.body)
          }, response => {
            // error callback
            console.log('err')
          })
      },
      getFirstPic(picData) {
        if(picData instanceof Array && picData[0]) return this.root + picData[0]
        return this.root + picData
      },
      getFace(face) {
        if(!face) return 'http://www.24jyun.com/24jia/i.php?v=2016050129022&it=1&bd=common&img=cmtx_02'
        return this.root+face
      },
      goToDetail(item) {
        if(item.type == 1){ //activity_id
          this.$router.push({name: 'detail', params: {id: item.activity_id, type: 1}})
          // this.$router.push({name: 'takeoutShop', params: {shopId: shopId}})
        }else{
          this.$router.push({name: 'detail', params: {id: item.post_id, type: 2}})
        }
      }
    },
    filters: {
      changeType(type) {
        if(type == 1){
          return '活动'
        }else if(type == 2){
          return '话题'
        }else{
          return '其他'
        }
      },
    },
    created() {
      this.getList()
    },
    mounted() {

    }
  }
</script>

<style lang="scss" scoped>
  .bottom{
    display: flex;
    justify-content: flex-end;
    margin-top: 11px;
    .bot{
      display: flex;
      align-items: center;
      margin-left: 32px;
      font-weight: 600;
      color: $c2;
    }
  }
  .mui-active{
    background-color: transparent!important;
  }
  .news-list{
    height: 100%;
    .mui-table-view-cell{
      padding: 11px 12px 0;
      margin-bottom: 6px;
      background: #fff;
      .icon-nomore{
        width: r(96);
        height: r(96);
        background: url(../../images/nomore.png) no-repeat;
        background-size: contain;
        margin: 0 auto;
      }
      .nomore{
        text-align: center;
        color: #696867;
        font-size: 16px;
      }
      .mui-media-object{
        width: r(48);
        height: r(48);
        border-radius: 50%;
        line-height: r(48);
        max-width: r(48);
      }
      .mui-media-body{
        padding-top: r(5);
        font-size: r(14);
        .icon-home{
          float: left;
          width: r(24);
          height: r(24);
          background: url(../../images/icon-home.png) center no-repeat;
          background-size: cover;
        }
      }
      .news-list-link{
        padding: r(20) 0 0 0;
        img{
          display: block;
          width: 100%;
        }
      }
      .news-list-date{
        color: #666;
        font-size: r(13);
      }
      .news-list-title{
        font-size: r(15);
        padding-top: r(10);
      }
      .news-list-name{
        float: left;
        height: r(22);
        line-height: r(24);
      }
      .news-list-type{
        float: right;
        width: r(64);
        height: r(32);
        line-height: r(33);
        font-size: r(13);
        text-align: center;
        color: #fff;
        background: url(../../images/news-box.png) center no-repeat;
        background-size: cover;
      }
      .mui-media-body-title{
        float: left;
        margin-left: 5px;
      }
    }


  }
</style>
