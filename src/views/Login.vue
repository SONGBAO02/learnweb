<template>
    <div class="wrapper">

        <body id="poster">
            <el-form class="login-container" label-position="left" label-width="0px">
                <h3 class="login_title">
                    欢迎登陆
                </h3>
                <el-form-item label="">
                    <el-input type="text" v-model="loginForm.loginName" autocomplete="off" placeholder="请输入学号/工号"
                        prefix-icon="el-icon-user-solid">
                    </el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-input type="password" v-model="loginForm.password" autocomplete="off" placeholder="密码"
                        prefix-icon="el-icon-lock"></el-input>
                </el-form-item>

                <div class="role">
                    <span class="radio-title">请选择登录角色：</span>
                        <el-radio-group v-model="loginForm.role">
                        <el-radio :label="1">学生</el-radio>
                        <el-radio :label="2">教师</el-radio>
                    </el-radio-group>
                </div>

                <el-form-item>
                    <el-button style="border: none;" @click="toRegister()">点击注册</el-button>
                    <el-button type="primary" style="border: none;" @click="login">
                        登录
                    </el-button>
                </el-form-item>
            </el-form>
        </body>
    </div>
</template>
  
<script>


export default {
    name: 'Login',
    data() {
        return {
            loginForm: {
                loginName: '',
                password: '',
                role: 1
            }
        }
    },
    methods: {
        created() {
            window.addEventListener('resize', this.handleResize)
        },
        beforeUnmount() {
            window.removeEventListener('resize', this.handleResize)
        },
        login() {
            // this.axios.post('后端接口',this.ruleForm).then((resp)=>{
            //     let data =resp.data;
            //     if(data.success){
            //         this.loginForm={};
            //         this.$message({
            //         message: '登陆成功！！！',
            //         type: 'success'
            //     });
            console.log('submit!', this.loginForm);
            this.$message({
                message: '登陆成功！！！',
                type: 'success'
            });
            this.$router.push({ path: '/home' })
        },
        toRegister() {
            this.$router.push({ path: '/Register' })
        }
    }
}

</script>

<style lang="less" scoped>
#poster {
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
}

body {
    margin: 0px;
    padding: 0px;
}

.login-container {
    border: 1px solid #dccfcf;
    width: 350px;
    margin: 180px auto;
    padding: 35px 80px 15px 35px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 25px #909399;
    background-color: rgba(255, 255, 255, 0.7);
}

.login_title {
    margin: 0px auto 40px 40px;
    text-align: center;
    color: #505458;
}

.wrapper {
    position: fixed;
    height: 100%;
    width: 100%;
    background: url("../images/backgroundimg.jpg") no-repeat;
    background-size: 100% 100%;
    overflow-y: scroll;
    overflow-x: hidden;
}

.radio-title {
    margin-right: 15px;
}
.role {
    margin-bottom: 20px;
}
</style>