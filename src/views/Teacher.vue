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


</style>