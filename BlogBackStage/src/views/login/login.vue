<template>
    <!--登录页-->
    <div class="views-wrap login-view">
        <div class="login-content"
             v-loading="is_timer"
             element-loading-text="登录中~~~"
        >
            <h1 class="login-title">后台管理系统</h1>
            <div class="input-wrap">
                <el-form :model="loginForm" :rules="loginRules" ref="loginForm">
                    <el-form-item class="input-box" prop="user_name">
                        <el-input type="text" placeholder="请输入帐号" v-model="loginForm.user_name" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item class="input-box" prop="user_password">
                        <el-input type="password" placeholder="请输入密码" v-model="loginForm.user_password" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item class="input-button">
                        <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
  </div>
  <!--/登录页-->
</template>
<script>
    import Tool from '../../assets/lib/Tool';
    import Util from '../../assets/lib/Util';
    export default {
        name: 'login',
        data() {
            var validateUserName = (rule, value, callback) => {
                if (value === '')
                    return callback(new Error('请输入帐号'));
                callback();
            };
            var validateUserPassword = (rule, value, callback) => {
                if (value === '')
                    return callback(new Error('请输入密码'));
                callback();
            };
            return {
                is_timer: false,
                loginForm: {
                    user_name: '',
                    user_password: ''
                },
                loginRules: {
                    user_name: [
                        { validator: validateUserName, trigger: 'blur' }
                    ],
                    user_password: [
                        { validator: validateUserPassword, trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if ( this.is_timer ) return;
                        this.is_timer = true;
                        Util.login(this.loginForm,(result) => {
                            setTimeout( () => {
                                if (result.status){
                                    var data = result.data;
                                    Tool.dataToSessionStorageOperate.save('token', data.token);
                                    Tool.dataToSessionStorageOperate.save('user', data.user);
                                    this.$router.push("/?tab=all");
                                } else {
                                    this.$message({
                                        showClose: true,
                                        message: result.msg,
                                        type: 'error'
                                    });
                                }
                                this.is_timer = false;
                            },1000)
                        });
                        return true;
                    } else {
                        return false;
                    }
                });
            }
        }
    }
</script>
<style lang="scss">
    @import "../../assets/scss/define";
    .login-view{
        @extend %db;
        @extend %h100;
        background-color: #1F2D3D;
    }
    .login-content{
        @extend %t50;
        position: absolute !important;
        right: 15%;
        width: 300px;
        height: 380px;
        margin-top: -240px;
        padding: 50px;
        background-color: #fff;
    }
    .login-title{
        @extend %c6;
        @extend %f18;
        @extend %fwn;
        line-height: 40px;
    }
    .input-wrap{
        padding: 20px 0;
        input{
            border-radius: 0;
            height: 40px;
        }
        .el-button{
            border-radius: 0;
            padding: 12px 15px;
        }
        .input-box,.input-button{
            margin: 25px 0;
        }
    }
    .input-button{
        button{
            @extend %f16;
            @extend %w100;
            @extend %db;
        }
    }
</style>
