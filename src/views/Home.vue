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
                        <li ><router-link to="/Course">课程</router-link></li>
                        <li ><router-link to="/Teacher">教师</router-link></li>
                    </ul>
                </div>
                <!-- 搜索 -->
                <div class="search">
                    <input type="text" placeholder="输入关键词"><button ></button>
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

        <!-- 轮播图bannner  -->
        <div class="page">
            <div class="banner">
                <div class="banner-left" style="height: 360px;">
                    <div class="banner-left-course">
                        <span class="banner-left-course-tpye">
                            <a href="#" target="_blank" rel="noopener noreferrer">国家精品</a>
                        </span>
                        <span class="subject"></span>
                    </div>
                    <div class="banner-left-course">
                        <span class="banner-left-course-tpye">
                            <a href="#" class="subject1" target="_blank" rel="noopener noreferrer">计算机</a>
                        </span>
                        <span class="subject">
                            <a href="#" class="subject1" title="大数据与人工智能" target="_blank"
                                rel="noopener noreferrer">大数据与人工智能</a>
                            <span>/</span>
                            <a href="#" class="subject1" title="软件工程" target="_blank" rel="noopener noreferrer">软件工程</a>
                        </span>
                    </div>
                    <div class="banner-left-course">
                        <span class="banner-left-course-tpye">
                            <a href="#" target="_blank" rel="noopener noreferrer">外语</a>
                        </span>
                        <span class="subject">
                            <span class="subject">
                                <a href="#" class="subject1" title="听力/口语" target="_blank"
                                    rel="noopener noreferrer">听力/口语</a>
                                <span>/</span>
                                <a href="#" class="subject1" title="写作/翻译" target="_blank"
                                    rel="noopener noreferrer">写作/翻译</a>
                            </span>
                        </span>
                    </div>
                    <div class="banner-left-course">
                        <span class="banner-left-course-tpye">
                            <a href="#" target="_blank" rel="noopener noreferrer">理学工学农学</a>
                        </span>
                        <span class="subject">
                            <a href="#" class="subject1" title="数学" target="_blank" rel="noopener noreferrer">数学</a>
                            <span>/</span>
                            <a href="#" class="subject1" title="物理" target="_blank" rel="noopener noreferrer">物理</a>
                            <span>/</span>
                            <a href="#" class="subject1" title="化学" target="_blank" rel="noopener noreferrer">化学</a>
                            <span>/</span>
                            <a href="#" class="subject1" title="天文学" target="_blank" rel="noopener noreferrer">天文学</a>
                            <span>/</span>
                            <a href="#" class="subject1" title="地理学" target="_blank" rel="noopener noreferrer">地理学</a>
                            <span>/</span>
                            <a href="#" class="subject1" title="生物科学" target="_blank" rel="noopener noreferrer">生物科学</a>
                            <span>/</span>
                            <a href="#" class="subject1" title="机械" target="_blank" rel="noopener noreferrer">机械</a>
                            <span>/</span>
                            <a href="#" class="subject1" title="电气信息" target="_blank" rel="noopener noreferrer">电气信息</a>
                        </span>
                    </div>
                    <div class="banner-left-course">
                        <span class="banner-left-course-tpye">
                            <a href="#" target="_blank" rel="noopener noreferrer">考研</a>
                        </span>
                        <span class="subject">
                            <a href="#" class="subject1" title="数学" target="_blank" rel="noopener noreferrer">数学</a>
                            <span>/</span>
                            <a href="#" class="subject1" title="英语" target="_blank" rel="noopener noreferrer">英语</a>
                            <span>/</span>
                            <a href="#" class="subject1" title="政治" target="_blank" rel="noopener noreferrer">政治</a>
                            <span>/</span>
                            <a href="#" class="subject1" title="408计算机" target="_blank" rel="noopener noreferrer">408计算机</a>
                        </span>
                    </div>
                    <div class="banner-left-course">
                        <span class="banner-left-course-tpye">
                            <a href="#" target="_blank" rel="noopener noreferrer">期末突击</a>
                        </span>
                        <span class="subject">
                            <a href="#" class="subject1" title="数学" target="_blank" rel="noopener noreferrer">数学</a>
                            <span>/</span>
                            <a href="#" class="subject1" title="物理" target="_blank" rel="noopener noreferrer">物理</a>
                        </span>
                    </div>
                    <div class="banner-left-course">
                        <span class="banner-left-course-tpye">
                            <a href="#" target="_blank" rel="noopener noreferrer">四六级</a>
                        </span>
                        <span class="subject"></span>
                    </div>
                    <div class="banner-left-course">
                        <span class="banner-left-course-tpye">
                            <a href="#" target="_blank" rel="noopener noreferrer">大学应试英语</a>
                        </span>
                        <span class="subject">
                            <a href="#" class="subject1" title="四六级" target="_blank" rel="noopener noreferrer">四六级</a>
                            <span>/</span>
                            <a href="#" class="subject1" title="考研英语" target="_blank" rel="noopener noreferrer">考研英语</a>
                        </span>
                    </div>
                    <div class="banner-left-course">
                        <span class="banner-left-course-tpye">
                            <a href="#" target="_blank" rel="noopener noreferrer">专升本</a>
                        </span>
                        <span class="subject">
                            <a href="#" class="subject1" title="广东" target="_blank" rel="noopener noreferrer">广东</a>
                            <span>/</span>
                            <a href="#" class="subject1" title="广西" target="_blank" rel="noopener noreferrer">广西</a>
                            <span>/</span>
                            <a href="#" class="subject1" title="云南" target="_blank" rel="noopener noreferrer">云南</a>
                            <span>/</span>
                            <a href="#" class="subject1" title="广西" target="_blank" rel="noopener noreferrer">浙江</a>
                            <span>/</span>
                            <a href="#" class="subject1" title="广西" target="_blank" rel="noopener noreferrer">黑龙江</a>
                            <span>/</span>
                        </span>
                    </div>
                    <div class="banner-left-course more">
                        <span class="banner-left-course-tpye">
                            <a href="#" target="_blank" rel="noopener noreferrer">更多</a>
                        </span>
                        <span class="subject"> <img src="../images/more.png" alt=""></span>
                    </div>
                </div>
                <div class="banner-middle">
                </div>
                <div class="banner-right">
                    <div class="user pad">
                        <a href="#"><img class="circleImg1" src="../images/user1.png" alt=""></a>
                    </div>
                    <div class=" user1">
                        蜡笔小金
                    </div>
                    <div class="Collect-courses">
                        <a href="#">
                            <div class="courses">大学物理-力学与热学</div>
                        </a>
                        <a href="#">
                            <div class="courses">计算机组成原理</div>
                        </a>
                        <a href="#">
                            <div class="courses">计算机数据结构</div>
                        </a>
                    </div>

                    <div class="MyCourses">
                        <div class="MyCourses1" role="button" tabindex="0">我的课程</div>
                    </div>
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

        <!-- 版权 : 注意要清除浮动的影响, 课程的li 的 父级 -->
        <!-- li都浮动了, 脱标, 撑不开父级的高度 -->
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

<script>

</script>

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


/* 轮播图banner */

.page {
    width: 1200px;
    margin: 0 auto;
}

.banner {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 1200px;
    margin-bottom: 12px;
    position: relative;
}


/* banner-left */

.banner-left {
    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;
    width: 200px;
    height: 360px;
    padding: 10px 0;
    border-radius: 8px;
    background-color: rgb(255, 255, 255);
    position: absolute;
    transition: all 0.2s;
    left: 0;
    z-index: 9;
}

.banner-left .banner-left-course {
    box-sizing: border-box;
    width: 200px;
    height: 34px;
    padding: 0 12px;
    line-height: 34px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: rgb(153, 153, 153);
}

.banner-left .banner-left-course:hover {
    background-color: skyblue;
    color: #27ff9c;
}

.banner-left .banner-left-course .banner-left-course-tpye {
    margin-right: 8px;
    font-size: 14px;
    font-weight: 500;
    color: rgb(51, 51, 51);
}

.banner-left a {
    color: inherit;
    transition: all 0.2s;
}

.banner-left .banner-left-course .subject {
    line-height: 17px;
    font-size: 12px;
    font-weight: 400;
}


/* banner-middle */

.banner-middle {
    position: relative;
    width: 776px;
    height: 360px;
    border-radius: 8px;
    left: 212px;
    background-color: rgb(255, 255, 255);
    background-image: url(../images/banner.png);
}


/* banner-right */

.banner-right {
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    -ms-flex-align: center;
    align-items: center;
    width: 200px;
    height: 360px;
    border-radius: 8px;
    background-color: rgb(255, 255, 255);
}

.pad,
.MyCourses {
    margin: 20px;
}

.circleImg1 {
    border-radius: 30px;
    width: 60px;
    height: 60px;
    margin: 0 auto;
}

.user1 {
    font-size: 12px;
}

.Collect-courses {
    margin-top: 20px;
    line-height: 100px;
    height: 100px;
}

.courses {
    line-height: 30px;
    height: 30px;
    font-size: 14px;
    color: #888888;
}

.Collect-courses .courses:hover {
    color: #00CC7E;
}

.banner-right .MyCourses .MyCourses1 {
    width: 168px;
    height: 32px;
    border-radius: 18px;
    line-height: 32px;
    font-size: 14px;
    text-align: center;
    color: rgb(255, 255, 255);
    background-color: #00CC7E;
    outline: none;
    cursor: pointer;
    transition: 0.1s all;
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