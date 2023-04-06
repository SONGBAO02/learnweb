<template>
    <body>
        <!-- 布局:从外到内，从上到下，从左到右
    css 顺序:浮动/display; 盒子模型;文字样式； -->

        <!-- 头部header: 负责头部区域的样式，wrapper只负责版心效果 -->
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
                <div class="search">
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

        <!-- 精品推荐课程 -->
        <div class="box wrapper">
            <div class="title">
                <h2>精品推荐</h2>
                <a href="#">查看全部</a>
            </div>

            <div class="content clearfix">
                <ul>
                    <li><router-link to="/CourseDetails">
                        <a href="#">
                            <img src="../images/course07.png" alt="">
                            <h3>Think PHP 5.0 博客系统实战项目演练</h3>
                            <p><span>高级</span> • 1125人在学习</p>
                        </a>
                        </router-link>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../images/course07.png" alt="">
                            <h3>Think PHP 5.0 博客系统实战项目演练</h3>
                            <p><span>高级</span> • 1125人在学习</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../images/course07.png" alt="">
                            <h3>Think PHP 5.0 博客系统实战项目演练</h3>
                            <p><span>高级</span> • 1125人在学习</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../images/course07.png" alt="">
                            <h3>Think PHP 5.0 博客系统实战项目演练</h3>
                            <p><span>高级</span> • 1125人在学习</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../images/course07.png" alt="">
                            <h3>Think PHP 5.0 博客系统实战项目演练</h3>
                            <p><span>高级</span> • 1125人在学习</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../images/course07.png" alt="">
                            <h3>Think PHP 5.0 博客系统实战项目演练</h3>
                            <p><span>高级</span> • 1125人在学习</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../images/course07.png" alt="">
                            <h3>Think PHP 5.0 博客系统实战项目演练</h3>
                            <p><span>高级</span> • 1125人在学习</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../images/course07.png" alt="">
                            <h3>Think PHP 5.0 博客系统实战项目演练</h3>
                            <p><span>高级</span> • 1125人在学习</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../images/course07.png" alt="">
                            <h3>Think PHP 5.0 博客系统实战项目演练</h3>
                            <p><span>高级</span> • 1125人在学习</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../images/course07.png" alt="">
                            <h3>Think PHP 5.0 博客系统实战项目演练</h3>
                            <p><span>高级</span> • 1125人在学习</p>
                        </a>
                    </li>

                </ul>
            </div>
        </div>

        <!-- 付费课程 -->
        <div class="box wrapper">
            <div class="title">
                <h2><span><img src="../images/fufei.png" alt=""></span>&nbsp; 付费课程</h2>
                <a href="#">查看全部</a>
            </div>

            <div class="content clearfix">
                <ul>
                    <li>
                        <a href="#">
                            <img src="../images/course02.png" alt="">
                            <h3>Think PHP 5.0 博客系统实战项目演练</h3>
                            <p><span>高级</span> • 1125人在学习</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../images/course02.png" alt="">
                            <h3>Think PHP 5.0 博客系统实战项目演练</h3>
                            <p><span>高级</span> • 1125人在学习</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../images/course02.png" alt="">
                            <h3>Think PHP 5.0 博客系统实战项目演练</h3>
                            <p><span>高级</span> • 1125人在学习</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../images/course02.png" alt="">
                            <h3>Think PHP 5.0 博客系统实战项目演练</h3>
                            <p><span>高级</span> • 1125人在学习</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../images/course02.png" alt="">
                            <h3>Think PHP 5.0 博客系统实战项目演练</h3>
                            <p><span>高级</span> • 1125人在学习</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../images/course02.png" alt="">
                            <h3>Think PHP 5.0 博客系统实战项目演练</h3>
                            <p><span>高级</span> • 1125人在学习</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../images/course02.png" alt="">
                            <h3>Think PHP 5.0 博客系统实战项目演练</h3>
                            <p><span>高级</span> • 1125人在学习</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../images/course02.png" alt="">
                            <h3>Think PHP 5.0 博客系统实战项目演练</h3>
                            <p><span>高级</span> • 1125人在学习</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../images/course02.png" alt="">
                            <h3>Think PHP 5.0 博客系统实战项目演练</h3>
                            <p><span>高级</span> • 1125人在学习</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../images/course02.png" alt="">
                            <h3>Think PHP 5.0 博客系统实战项目演练</h3>
                            <p><span>高级</span> • 1125人在学习</p>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
        <!-- 会员精选 -->
        <div class="box wrapper">
            <div class="title">
                <h2> <span><img src="../images/huiyuan.png" alt=""></span>&nbsp; 会员精选</h2>
                <a href="#">查看全部</a>
            </div>

            <div class="content clearfix">
                <ul>
                    <li>
                        <a href="#">
                            <img src="../images/course04.png" alt="">
                            <h3>Think PHP 5.0 博客系统实战项目演练</h3>
                            <p><span>高级</span> • 1125人在学习</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../images/course04.png" alt="">
                            <h3>Think PHP 5.0 博客系统实战项目演练</h3>
                            <p><span>高级</span> • 1125人在学习</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../images/course04.png" alt="">
                            <h3>Think PHP 5.0 博客系统实战项目演练</h3>
                            <p><span>高级</span> • 1125人在学习</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../images/course04.png" alt="">
                            <h3>Think PHP 5.0 博客系统实战项目演练</h3>
                            <p><span>高级</span> • 1125人在学习</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../images/course04.png" alt="">
                            <h3>Think PHP 5.0 博客系统实战项目演练</h3>
                            <p><span>高级</span> • 1125人在学习</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../images/course04.png" alt="">
                            <h3>Think PHP 5.0 博客系统实战项目演练</h3>
                            <p><span>高级</span> • 1125人在学习</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../images/course04.png" alt="">
                            <h3>Think PHP 5.0 博客系统实战项目演练</h3>
                            <p><span>高级</span> • 1125人在学习</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../images/course04.png" alt="">
                            <h3>Think PHP 5.0 博客系统实战项目演练</h3>
                            <p><span>高级</span> • 1125人在学习</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../images/course04.png" alt="">
                            <h3>Think PHP 5.0 博客系统实战项目演练</h3>
                            <p><span>高级</span> • 1125人在学习</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../images/course04.png" alt="">
                            <h3>Think PHP 5.0 博客系统实战项目演练</h3>
                            <p><span>高级</span> • 1125人在学习</p>
                        </a>
                    </li>

                </ul>
            </div>
        </div>

        <div class="footer">
            <div class="wrapper">
                <div class="left">
                    <img src="../images/logo.png" alt="">
                    <p>广软在线致力于让每一个有提升愿望的用户能够学到广州软件学院的课程。<br> © 2017年XTCG Inc.保留所有权利。-沪ICP备15025210号</p>
                    <a href="#">下载APP</a>
                </div>
                <div class="right">
                    <dl>
                        <dt>关于我们</dt>
                        <br>
                        <dd><a href="#">关于我们</a></dd>
                        <dd><a href="#">联系我们</a></dd>
                        <dd><a href="#">常见问题</a></dd>
                        <dd><a href="#">意见反馈</a></dd>
                    </dl>
                    <dl>
                        <dt>关注我们</dt>
                        <br>
                        <dd>
                            <a href="#"><img src="../images/WeChat.png" alt=""></a>
                            <a href="#"><img src="../images/QQ.png" alt=""></a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>友情链接</dt>
                        <br>
                        <dd><a href="#">智慧树</a></dd>
                        <dd><a href="#">哔哩哔哩</a></dd>
                        <dd><a href="#">中国大学mooc</a></dd>
                    </dl>
                </div>
            </div>
        </div>
    </body>
</template>


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

.search {
    float: left;
    margin-left: 59px;
    margin-top: 10px;
    /* border-radius: 20px; */
    width: 310px;
    height: 40px;
    border: 1px solid #00a4ff;
}

.search input {
    float: left;
    padding-left: 10px;
    /* 左右加一起的尺寸要小于等于410 */
    width: 258px;
    height: 38px;
    border: 0;
}


/* 控制placeholder的样式 */

.search input::placeholder {
    font-size: 14px;
    color: #bfbfbf;
}

.search button {
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

/* 精品课程 */

.box {
    margin-top: 35px;
}

.box .title {
    height: 40px;
}

.box .title h2 {
    float: left;
    font-size: 20px;
    color: #494949;
    font-weight: 400;
}

.box .title a {
    float: right;
    margin-right: 30px;
    font-size: 12px;
    color: #a5a5a5;
}

.box .content li {
    float: left;
    margin-right: 15px;
    margin-bottom: 15px;
    width: 228px;
    height: 270px;
    background-color: #fff;
}

.box .content li:nth-child(5n) {
    margin-right: 0;
}

.box .content li h3 {
    padding: 20px;
    font-size: 14px;
    color: #050505;
    font-weight: 400;
}

.box .content li p {
    padding: 0 20px;
    font-size: 12px;
    color: #999;
}

.box .content li span {
    color: #ff7c2d;
}


/* 课程模块 定位小图 */

/* 版权 */

.footer {
    margin-top: 40px;
    padding-top: 30px;
    height: 260px;
    background-color: #fff;
}

.footer .left {
    float: left;
    margin-top: 20px;
}

.footer .left p {
    margin: 20px 0 10px;
    font-size: 12px;
    color: #666;
}

.footer .left a {
    display: inline-block;
    width: 120px;
    height: 36px;
    border: 1px solid #00a4ff;
    text-align: center;
    line-height: 36px;
    font-size: 16px;
    color: #00a4ff;
}

.footer .right {
    float: right;
    margin-top: 40px;
    height: 64px;
    width: 560px;
}

.footer .right dl {
    float: left;
    margin-left: 80px;
}
</style>