<template>
  <div class="wrapper">
    <div id="poster">
      <el-form :model="ruleForm" ref="ruleForm" :rules="rules" label-width="0px" label-position="left"
        class="register-container">
        <h3 class="register_title" style="float: center;">
          欢迎注册
          <el-button @click="toLogin()">点击登录</el-button>
        </h3>

        <el-form-item label="" prop="LoginName">
          <el-input type="text" v-model.number="ruleForm.LoginName" placeholder="请输入用户名" autocomplete="off"
            prefix-icon="el-icon-user-solid">
          </el-input>
        </el-form-item>

        <el-form-item label="" prop="PassWord">
          <el-input type="password" v-model="ruleForm.PassWord" autocomplete="off" placeholder="请输入密码"
            prefix-icon="el-icon-lock">
          </el-input>
        </el-form-item>

        <el-form-item label="" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="请确认密码"
            prefix-icon="el-icon-lock">
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" style="border: none;" @click="submitForm('ruleForm')">注册</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
  
<script>
// @ is an alias to /src

export default {
  name: 'Register',
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.PassWord) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        LoginName: '',
        PassWord: '',
        checkPass: ''
      },
      rules: {
        LoginName: [
          { required: true, message: "请输入你的用户名", trigger: 'blur' },
          { min: 6, max: 18, message: "6到18个字符", trigger: 'blur' }
        ],
        PassWord: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    // this.axios.post('后端接口',this.ruleForm).then((resp)=>{
    // console.log(resp);
    // let data =resp.data;
    // if(data.success){
    //    this.loginForm={};
    //       this.$message({
    //       message: '恭喜您，注册成功！！！',
    //       type: 'success'
    // });
    submitForm(formName) {
      this.ruleForm = {};
      this.$message({
        message: '恭喜您，注册成功！！！',
        type: 'success'
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    toLogin() {
      this.$router.push({ path: '/' })
    }
  }
}

</script>

<style scoped>
#poster {
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
  margin: 0px;
  padding: 0px;
}

body {
  margin: 0px;
  padding: 0px;
}

.register-container {
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

.register_title {
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
</style>