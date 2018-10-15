<template>
  <div class="detail">
    <!--详情-->
    <div class="mui-table-view-cell mui-media">
      <a href="javascript:;" >
        <img class="mui-media-object mui-pull-left" :src="getFace(item.face)" >
        <div class="mui-media-body">
          <div class="clearfix mui-media-body-title">
            <div class="clearfix">
              <span class="news-list-name">{{item.nickname}}</span><i class="icon-home"></i>
            </div>
            <div class="news-list-date">{{item.how_long}}</div>
          </div>
          <!--<div class="news-list-type">{{item.type|changeType}}</div>-->
        </div>
      </a>
      <div class="news-list-title">{{item.title}}</div>
      <!--<a href="javascript:;" class="news-list-link"><img v-lazy="getFirstPic(item.pic)" alt="" ></a>-->
    </div>
    <!--轮播图-->
    <van-swipe :autoplay="3000" >
      <van-swipe-item v-for="(image, index) in item.pic" :key="index">
        <img v-lazy="root + image" />
      </van-swipe-item>
    </van-swipe>
    <!--评论列表-->
    <div class="comment-list">
      <div class="comment" v-for="comment in replyData">
        <div class="face" :style="`background:url('${getFace(comment.face)}') no-repeat`"></div>
        <van-cell-group>
          <van-cell :title="comment.nickname" :value="comment.how_long" :label="comment.contents" />
        </van-cell-group>
      </div>
    </div>

    <div class="mui-table-view-cell mui-media">
      <div class="icon-nomore"></div>
      <div class="nomore">这里还是空空如也..</div>
    </div>

    <!--评论输入框-->
    <van-cell-group class="comment-add">
      <van-field
        v-model="msg"
        type="textarea"
        placeholder="说说你的看法..."
        rows="1"
        autosize
        icon="van-icon van-icon-add-o"
        @click-icon="addComment"
      />
      <van-button slot="button" size="small" type="primary">发表</van-button>
    </van-cell-group>
  </div>
</template>

<script>
  export default {
    name: 'Detail',
    data () {
      return {
        id: this.$route.params.id,
        type: this.$route.params.type,
        list: [],
        item: [],
        replyData:[],
        msg: ''
      }
    },
    methods: {
      getFirstPic(picData) {
        if(picData instanceof Array && picData[0]) return this.root + picData[0]
        return this.root + picData
      },
      getFace(face) {
        if(!face) return 'http://www.24jyun.com/24jia/i.php?v=2016050129022&it=1&bd=common&img=cmtx_02'
        return this.root+face
      },
      getList(callback) {
        // http://www.24jyun.com/apicode/htapi/topic/detail?post_id=fqZxqH6lc6mwqHOtfqmrmLW2np4
        // http://www.24jyun.com/apicode/htapi/activity/detail?activity_id=fqZxqH6lc6mwqHOtfqmv4LPcnp4
        // http://www.24jyun.com/apicode/htapi/activity/detail?activity_id=fqZxqH6lc6mwqHOtfqmv4LPMnp4
        if(this.type == 1){
          this.type_id = 'activity_id'
          this.t = 'activity'
        }else{
          this.type_id = 'post_id'
          this.t = 'topic'
        }
        this.$http
          .get(`${this.t}/detail?${this.type_id}=${this.id}`)
          .then(response => {
            // success callback
            if(response.body.res == 1){// 获得数据
              this.list = response.body.list
              if(this.type == 1){
                this.item = {
                  face: this.list[0].face,
                  pic: this.list[0].pic,
                  nickname: this.list[0].nickname,
                  title: this.list[0].title,
                  how_long: this.list[0].create_time
                }
                this.replyData = this.list[0].pl
                this.replyData.forEach(o=>{
                  o.contents = o.details
                  o.how_long = o.create_time
                })
              }else{
                this.item = this.list[0].postData
                this.replyData = this.list[0].replyData
              }

            }
            callback && callback(response.body)
          }, response => {
            // error callback
            console.log('err')
          })
      },
      addComment() {
        if(this.msg.trim() === ''){
          this.$toast('说点什么吧!')
          return false
        }
        // 判断登录
        let userid = localStorage.getItem('cmuserid')
        if(!userid){
          this.$toast('您尚未登录!')
          return false
        }
        let userinfo = localStorage.getItem('userinfo')
        userinfo = JSON.parse(userinfo)
        this.replyData.unshift({
          "contents": this.msg,
          "nickname": userinfo.nickname,
          "face": userinfo.face.replace("http://www.24jyun.com/apicode/i.php?img=",''),
          "how_long": this.getCurrentDate()
        })

        // this.$toast.allowMultiple();
        //
        // this.$toast.loading({
        //   mask: true,
        //   message: ''
        // });
        setTimeout(()=> {
          this.$toast.success('发布成功!')
        },500)
        this.msg = ''
      },
      getCurrentDate(){
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        var minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        var second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        return year + "-" + month + "-" + day + "-" + hour + ":" + minute + ":" + second;
      }
    },
    created() {
      this.getList()
    }
  }
</script>

<style lang="scss">
  /*轮播图*/
  .van-swipe{
    height: r(211);
    margin-bottom: 6px;
    .van-swipe-item{
      img{
        width: 100%;
        height: r(211);
      }
    }
  }

  .mui-active{
    background-color: transparent!important;
  }
  /*详情*/
  .detail{
    width: 100%;
    height: 100%;
    padding-top: 48px;
    padding-bottom: 44px;
    .mui-table-view-cell{
      padding: 11px 12px 6px;
      background: #fff;
      &::after{
        background-color: transparent;
      }
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

  /*评论列表*/
  .comment{
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    .face{
      width: 48px;
      height: 48px;
      margin: 8px;
      border-radius: 50%;
      background-size: contain!important;
    }
    .van-cell-group{
      flex: 1;
      .van-cell{
        padding: 8px 10px;
        .van-cell__label{
          color: #9b9b9b!important;
        }
        .van-cell__value{
          color: #9b9b9b;
          font-size: 12px;
        }
      }

    }
  }

  /*评论输入*/
  .comment-add{
    position: fixed!important;
    bottom: 0;
    left: 0;
    width: 100%;
    border: none;
  }
</style>
