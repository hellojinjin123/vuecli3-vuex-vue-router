<template>
  <div class="news-list">
    <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <ul>
        <!--这里放置真实显示的DOM内容-->
        <li class="mui-table-view-cell mui-media" v-for="item in list" >
          <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" :src="getFace(item.face)">
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
          <a href="" class="news-list-link"><img :src="getFirstPic(item.pic)" alt=""></a>
        </li>
        <!--没有更多数据-->
        <li class="mui-table-view-cell mui-media" v-if="allLoaded">
          <div class="icon-nomore"></div>
          <div class="nomore">这里还是空空如也..</div>
        </li>
      </ul>
    </mt-loadmore>
  </div>

</template>

<script>
  import { loadmore} from 'mint-ui'
  export default {
    name: 'newslist',
    props:['type'],
    data () {
      return {
        page: 1,
        pageNum: 1,
        list: [],
        allLoaded: false
      }
    },
    methods: {
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
      loadBottom() {
        // 加载更多数据
        var that = this
        console.log('loadone')
        // this.getList(function (data) {
        //   if(data.res != 1){
        //     that.allLoaded = true;// 若数据已全部获取完毕
        //     that.$refs.loadmore.onBottomLoaded();
        //   }
        // })
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
  .news-list{
    height: 100%;
    .mui-table-view-cell{
      padding: 11px 12px;
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
