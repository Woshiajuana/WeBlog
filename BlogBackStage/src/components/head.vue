<template>
  <div class="header-wrap">
      <h1 class="header-logo">
          <img class="header-logo-img" src="../assets/img/owulia-text.png" alt="">
      </h1>
      <div class="user-info">
          <el-dropdown>
              <span class="el-dropdown-link user-name">
              <img class="user-img" src="../assets/img/header-img.jpg" alt="">
                {{ user_name }}<i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item><a @click="safeExit"><i class="el-icon-upload2 exit-icon"></i> 安全退出</a></el-dropdown-item>
              </el-dropdown-menu>
          </el-dropdown>
      </div>
  </div>
</template>
<script>
    import Tool from '../assets/lib/Tool';
    export default {
        name: 'header',
        data () {
            return {
                user_name: ''
            }
        },
        created () {
            this.achieveUser();
        },
        methods: {
            achieveUser () {
                this.user_name = Tool.dataToSessionStorageOperate.achieve('user').user_name;
            },
            safeExit () {
                this.$confirm('是否安全退出?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    Tool.dataToSessionStorageOperate.clear();
                    this.$router.push("/login");
                });
            }
        }
    }
</script>
<style lang="scss">
    @import "../assets/scss/define";
    .exit-icon{
        transform: rotate(90deg);
    }
    .header-wrap{
        height: 60px;
        background-color: #1F2D3D;
    }
    .header-logo{
        @extend %fl;
        width: 80px;
        height: 50px;
        margin: 5px 0 0 30px;
    }
    .header-logo-img{
        @extend %db;
        @extend %h100;
    }
    .user-info{
        @extend %pa;
        @extend %cp;
        top: 10px;
        right: 20px;
    }
    .user-img{
        @extend %vam;
        width: 40px;
        height: 40px;
        margin-right: 5px;
        border-radius: 50%;
    }
    .user-name{
        @extend %cp;
        @extend %cfff;
        @extend %f12;
        @extend %vam;
    }
</style>
