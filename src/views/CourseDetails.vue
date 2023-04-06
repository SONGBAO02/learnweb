<template>
  <body>
    <div class="navtop">
      <div class="header wrapper">
        <h1>
          <a href="#"><img src="../images/logo.png" alt=""></a>
        </h1>

        <!-- 导航 -->
        <div class="nav">
          <ul>
            <li><router-link to="/Home">首页</router-link></li>
            <li><router-link to="/Course">课程</router-link></li>
            <li><router-link to="/Teacher">教师</router-link></li>
          </ul>
        </div>
        <!-- 搜索 -->
        <div class="search_nav">
          <input type="text" placeholder="输入关键词"><button></button>
        </div>


        <!-- 个人中心 -->
        <a href="#">
          <div class="Personal-Center">个人中心</div>
        </a>
        <!-- 用户 -->
        <div class="user">
          <a href="#"><img class="circleImg" src="../images/user.png" alt=""></a>
        </div>
      </div>
    </div>

    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/Course' }">课程</el-breadcrumb-item>
        <el-breadcrumb-item>精品推荐</el-breadcrumb-item>
        <el-breadcrumb-item>Think PHP 5.0</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="main_box">
      <!-- video start -->
      <div>
        <video-player :options="videoOptions" class="video-css"></video-player>
        <div class="introduction">
          <div style="text-align: center;color: white;border-bottom: 3px solid #9d9d9d"><span
              style="color: #59acf1">目录</span><span style="margin-left: 100px;">推荐</span></div>
          <div v-for="(item, index) in videoData" :key="index">
            <div style="margin-top: 10px;color: white;height: 35px;border-bottom: 2px solid #9d9d9d;">{{ item.title }}
            </div>
          </div>
        </div>
        <div style="width: 100%; height: 60px;float: left;background-color: #6a6868;color: white">
          <div class="content_box" style="width: 20%;">
            <span style="font-size: 20px;">Web前端之webpack入门到进阶</span>
            <br />
            <span>观看人数：1217人</span>
          </div>
          <div class="content_box" style="margin-left: 83px;">
            <span>评价</span>
            <br />
            <span>讲师：大头</span>
          </div>
          <div class="content_box" style="margin-left: 387px;">
            <input placeholder="发送弹幕" />
          </div>
        </div>
      </div>
      <!-- video end -->

      <!-- 评价 start -->
      <div class="left_part">
        <div class="item_list">
          <div class="item_header">
            <div class="classify_list">
              <a href=" ">章节目录 (7)</a>
              <a href="#">资料 (2)</a>
              <a href="#">留言评论 (7)</a>
            </div>
            <div class="Filter_list">
              <div>按时间</div>
              <div>按章节</div>
            </div>
          </div>

          <div class="list">
            <div class="item" v-for="(item, index) in data" :key="index">
              <div class="item_img_div">
              </div>
              <div class="item_describe">
                <div class="describe_top">
                  <span class="describe_title">{{ item.title }}</span>
                  <span class="describe_type" style="color: cornflowerblue">{{ item.price }}</span>
                </div>

                <div class="describe_bot">
                  <span class="describe_time">{{ item.time }}</span>
                  <span class="describe_ren">{{ item.number }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <!-- 评价 end -->

      <!-- 个人信息 start -->
      <div class="right_part">
        <div class="user_information">

          <div class="user_photos_div">
            <div class="user_img">
              <img src="" alt="">
            </div>

            <div class="user_name">
              <p>大头BaBa</p>
              <img src="" alt="">
            </div>

            <div class="user_more">
              <div>
                <p>好评率</p>
                <p>85.3%</p>
              </div>
              <div>
                <p>课程数</p>
                <p>73</p>
              </div>
              <div>
                <p>学习人数</p>
                <p>21342342</p>
              </div>
            </div>

            <div class="user_contact">
              <div class="contact">
                <div class="contact_img"></div>
                <p>11012011900</p>
              </div>

              <div class="contact">
                <div class="contact_img"></div>
                <p>1234567891@qq.com</p>
              </div>

              <div class="contact">
                <div class="contact_img"></div>
                <p>11012011900</p>
              </div>
            </div>


          </div>
        </div>

        <div class="comment_div">
          <textarea class="comment_text" rows="10" cols="30" placeholder="评论留言.."></textarea>
          <div class="comment_button_div">
            <button class="comment_button" type="submit">发表评论</button>
          </div>

        </div>
      </div>
      <!-- 个人信息 end -->

    </div>
  </body>
</template>

<script>
import videoPlayer from "@/components/VideoPlayer";
export default {
  name: 'CourseDetails',
  components: { videoPlayer },
  data() {
    const data = [{
      title: "第1节 开讲啦",
      price: "免费",
      time: "2020.11.01",
      number: "123"
    }, {
      title: "第1节 开讲啦",
      price: "免费",
      time: "2020.11.01",
      number: "123"
    }, {
      title: "第1节 开讲啦",
      price: "免费",
      time: "2020.11.01",
      number: "123"
    }, {
      title: "第1节 开讲啦",
      price: "免费",
      time: "2020.11.01",
      number: "123"
    }, {
      title: "第1节 开讲啦",
      price: "免费",
      time: "2020.11.01",
      number: "123"
    }, {
      title: "第1节 开讲啦",
      price: "免费",
      time: "2020.11.01",
      number: "123"
    },]

    const videoData = [{
      title: "第1节 webpack介绍"
    }, {
      title: "第2节 webpack介绍"
    }, {
      title: "第3节 webpack介绍"
    }, {
      title: "第4节 webpack介绍"
    }, {
      title: "第5节 webpack介绍"
    }, {
      title: "第6节 webpack介绍"
    }, {
      title: "第7节 webpack介绍"
    }]
    return {
      data,
      videoData,
      videoOptions: {
        controls: true,
        //fluid配置项根据外层css样式大小，自动填充宽高
        fluid: true,
        //sources配置项配置视频播放源
        sources: [
          {
            //播放源
            src: require('@/assets/yjs.mp4'),
            //视频类型
            type: "video/mp4"
          }
        ]
      }
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  /* 內减模式 */
  box-sizing: border-box;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}

.clearfix:after {
  clear: both;
}

body {
  background-color: #f3f5f7;
}


/* 版心 */

.wrapper {
  width: 1200px;
  margin: 0 auto;
}

.navtop {
  height: 60px;
  background-color: #ffffff;
}

.header {
  height: 60px;
  background-color: #ffffff;
  padding: 30px auto;
}

h1 {
  float: left;
}

.nav {
  float: left;
  margin-left: 70px;
  height: 60px;
}

.nav li {
  float: left;
  margin-right: 26px;
}

.Personal-Center,
.nav li a {
  display: block;
  padding: 0 9px;
  height: 60px;
  line-height: 60px;
  font-size: 16px;
  color: #050505;
}

.Personal-Center:hover,
.nav li a:hover {
  border-bottom: 2px solid #00a4ff;
}


/* 搜索 */

.search_nav {
  float: left;
  margin-left: 59px;
  margin-top: 10px;
  /* border-radius: 20px; */
  width: 310px;
  height: 40px;
  border: 1px solid #00a4ff;
}

.search_nav input {
  float: left;
  padding-left: 10px;
  /* 左右加一起的尺寸要小于等于410 */
  width: 258px;
  height: 38px;
  border: 0;
}


/* 控制placeholder的样式 */

.search_nav input::placeholder {
  font-size: 14px;
  color: #bfbfbf;
}

.search_nav button {
  float: left;
  width: 50px;
  height: 39px;
  background-image: url(../images/btn.png);
  border: 0;
  cursor: pointer;
}


/* 个人中心 */

.Personal-Center {
  float: left;
  margin-left: 80px;
}

.user {
  float: right;
  margin-right: 55px;
  height: 60px;
  line-height: 60px;
}

.circleImg {
  border-radius: 20px;
  width: 40px;
  height: 40px;
  margin: 0 auto;
}

.user img {
  /* 调节图片垂直对齐方式, middle:居中 */
  vertical-align: middle;
}

/* 版心 */
.wrapper {
  width: 1200px;
  margin: 0 auto;
}

.breadcrumb {
  height: 50px;
  
}

.main_box {
  height: 100%;
  width: 100%;
  margin: auto;
  border-radius: 5px;
}

.left_part {
  width: 1050px;
  height: 700px;
  float: left;
  border: 2px solid #C0C0C0;
}

.item_list {
  width: 950px;
  height: 700px;
  margin: 10px 0px 0px 75px;
  /*上右下左*/
}



.item_header {
  padding: 10px 0px;
}

/* 设置导航栏样式 */
.classify_list {
  float: left;
  overflow: hidden;
  display: flex;
  width: 450px;
  border: 2px solid #C0C0C0;
  border-radius: 3px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5)
}

/* 设置导航项样式 */
.classify_list a {
  float: left;
  padding: 8px 1px;
  width: 150px;
  text-align: center;
  text-decoration: none;
  border-right: 2px solid #C0C0C0;
  cursor: pointer;
}

/*设置最后一个元素右边框不显示*/
.classify_list a:last-child {
  border-right: none;
}

/*筛选列表*/
.Filter_list {
  float: right;
  /*background: red;*/
  width: 200px;
  height: 100%;
  padding: 8px 1px;
}

.Filter_list div {
  float: left;
  width: 100px;
}


.list {
  clear: both;
  width: 100%;
  height: 100%;
  /*background: red;*/
}

/*视频的小卡片*/
.item {
  float: left;
  width: 220px;
  height: 235px;
  /*background: blue;*/
  border-radius: 8px;
  border: 2px solid #C0C0C0;
  margin-right: 16px;
  margin-top: 20px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5)
}

.item:nth-child(4n) {
  margin-right: 0px;
}

.item_img_div {
  border-radius: 8px;
  width: 100%;
  height: 160px;
  background: #f8f8f8;
  position: relative;
}

.item_img {
  width: 100%;
  height: 100%;
  border-radius: 8px 8px 0px 0px;
}

.bofang_img {
  /*align-items: center*/
  width: 40px;
  height: 40px;
  position: absolute;
  left: 90px;
  top: 60px;
}

/*视频描述*/
.item_describe {
  width: 200px;
  padding: 0px 10px;
  height: 75px;
}

.describe_top,
.describe_bot {
  width: 100%;
  height: 37px;
  line-height: 37px;
}

.describe_type,
.describe_ren {
  float: right;
}

.describe_ren img {
  width: 14px;
  height: 14px;
  margin-right: 10px;
}

.describe_time,
.describe_ren {
  font-size: 14px;
}

.describe_title {
  color: black;
}




.right_part {
  width: 440px;
  height: 700px;
  float: right;
}

.user_information,
.comment_div {
  width: 376px;
  height: 302px;
  border: 2px solid #C0C0C0;
  padding: 20px 30px;
}

.comment_div {
  margin-top: 10px;
}


/*用户头像*/
.user_photos_div {
  width: 100%;
  height: 75px;
}

.user_img {
  float: left;
  height: 75px;
  width: 75px;
  background: #2d363f;
  border-radius: 50%;
}

.user_name {
  float: left;
  width: 200px;
  height: 75px;
  padding: 0px 0px 0px 15px;
}

.user_name p {
  color: #4d9cdd;
}


.user_more {
  clear: both;
  width: 100%;
  height: 75px;
  padding: 20px 0px;
}

.user_more div {
  float: left;
  width: 33%;
  height: 75px;
  text-align: center;
  color: #2d363f;
}

.user_contact {
  width: 100%;
  height: 100px;
  border-top: 1px solid #C0C0C0;


  /*background: red;*/
}

.contact {
  height: 23px;
  line-height: 23px;
  margin: 0px;
}

.contact p {
  text-indent: 1em;
  color: #4d9cdd;
}

.contact_img {
  float: left;
  width: 23px;
  height: 23px;
}

.contact_img img {
  width: 100%;
  height: 100%;
}

.comment_text {
  width: 100%;
  height: 250px;
}


.comment_button_div {
  height: 30px;
  width: 100px;
  text-align: right;
  float: right;
  padding: 10px 0px;
}

.comment_button {
  width: 80px;
  background: #59acf1;
  color: #f8f8f8;
  padding: 3px 5px;
  border-radius: 5px;
}

.video-css {
  width: 1215px;
  height: 609px;
  float: left;
}

.introduction {
  width: 304px;
  height: 609px;
  float: left;
  background-color: #676767;
}

.content_box {
  width: 10%;
  height: 100%;
  float: left;
}

.content_box input {
  width: 280px;
  height: 23px;
  border-radius: 30px;
  background-color: #c7c6c6;
  margin-top: 15px;
}
</style>
