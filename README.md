# Vue-cli3脚手架基于Vue2.0+Vue-router+Vuex实现的简易社交活动分享和外卖购物车功能项目(移动端新手向)
## 来由
这个小项目来源于之前开发的一个网站，主要是为公寓用户提供服务的，包括租房、社交、商户、缴费等等一系列功能。不过后来公寓计划破产了。。。后来我借用了几个接口数据，重新采用了vue相关技术还原了部分功能用于学习。
[原网站]:http://www.24jyun.com/24jia/community/sy_square.html

## 前端架构
rem页面结构(H5,CSS3),vant-ui,mint-ui
框架(基于Vue脚手架:vue-cli3)进行搭建
数据请求处理框架(Vue-resource)
Vue-Router进行路由处理
Vue-LazyLoad进行图片赖加载
## 服务端架构
vue-resource请求接口数据
首页数据和外卖商铺以及购物车数据为了省事直接调用了之前那个项目的线上数据接口，目前依然能用，接口是我之前工作的时候用php写的。后续可以改成mockJs本地模拟数据也可以。

## 目前项目已实现功能
首页活动的展示，活动详情
首页活动评论，评论添加(并没有调用接口入库，只是模拟一条数据显示)
外卖商家以及详情展示
购物车
我的模块展示
登录(预设两个账户登陆，存入localstorage模拟登陆)

## 安装
npm install
npm run serve

## 项目效果图
![avatar](https://raw.githubusercontent.com/hellojinjin123/vuecli3-vuex-vue-router/dev/public/1.gif)


![avatar](https://raw.githubusercontent.com/hellojinjin123/vuecli3-vuex-vue-router/dev/public/2.gif)










