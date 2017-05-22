<template>
    <div class="container-box"
             v-loading="is_loading"
             element-loading-text="loading~~~">
            <div class="container-content">
                <div class="create-user">
                    <el-input v-model="user_name" placeholder="请输入帐号"></el-input>
                    <el-input v-model="user_password" type="password" placeholder="请输入密码"></el-input>
                    <el-button type="primary" @click="createUser">创建管理员</el-button>
                </div>
                <template>
                    <el-table
                        :data="user_arr"
                        border
                        style="width: 100%">
                        <el-table-column
                            type="index"
                            width="55">
                        </el-table-column>
                        <el-table-column
                            label="管理员帐号"
                            width="180">
                            <template scope="scope">
                                {{ scope.row.user_name }}
                            </template>
                        </el-table-column>
                        <el-table-column
                            label="管理员密码"
                            width="180">
                            <template scope="scope">
                                {{ scope.row.user_password }}
                            </template>
                        </el-table-column>
                        <el-table-column
                            label="创建时间"
                            width="200">
                            <template scope="scope">
                                <el-icon name="time"></el-icon>
                                <span style="margin-left: 10px">{{ scope.row.user_date | articleTime }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="操作">
                            <template scope="scope">
                                <el-button
                                    size="small"
                                    type="danger"
                                    @click="handleDelete(scope.row)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </template>
            </div>
        </div>
</template>
<script>
    import Util from '../../assets/lib/Util'
    import Tool from '../../assets/lib/Tool'
    import types from '../../store/mutation-types'
    export default {
        name: 'user',
        data() {
            return {
                user_name: '',
                user_password: '',
                is_loading: false,
                user_arr: []
            }
        },
        filters: {
            articleTime (article_time) {
                return article_time ? Tool.format('yyyy-MM-dd hh:mm',new Date(article_time)) : '';
            }
        },
        methods: {
            handleDelete(row) {
                this.$confirm('是否删除'+ row.user_name +'管理帐号?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.is_loading = true;
                    Util.deleteUser(row.user_name,(result) => {
                        this.is_loading = false;
                        if(result.status){
                            this.fetchUser();
                            this.$message({type: 'success', message: result.msg});
                        }else{
                            this.$message({type: 'error', message: result.msg});
                        }
                    });
                }).catch(() => {
                    this.$message({type: 'info', message: '已取消删除'});
                });
            },
            fetchUser () {
                this.is_loading = true;
                Util.fetchUser((result) => {
                    setTimeout(() => {
                        this.is_loading = false;
                        if (result.status) {
                            this.user_arr = result.data.users;
                        }
                    },300)
                })
            },
            reset () {
                this.user_name = '';
                this.user_password = '';
            },
            createUser () {
                if (!this.user_name.trim() || !this.user_password.trim()) {
                    this.$message({type: 'error', message: '请填写完整帐号信息'});
                    return;
                }
                this.$confirm('是否创建'+ this.user_name +'管理帐号?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.is_loading = true;
                    var user = {
                        user_name: this.user_name,
                        user_password: this.user_password
                    };
                    Util.createUser(user,(result) => {
                        setTimeout(() => {
                            this.is_loading = false;
                            if (result.status) {
                                this.fetchUser();
                                this.reset();
                                this.$message({type: 'success', message: result.msg});
                            }else{
                                this.$message({type: 'error', message: result.msg});
                            }
                        },300)
                    })
                }).catch(() => {
                    this.$message({type: 'info', message: '已取消创建'});
                });
            }
        },
        created () {
            this.fetchUser();
            this.$store.commit(types.SET_TAB_INDEX,'4');
        }
    }
</script>
<style lang="scss">
    @import "../../assets/scss/define";
    .create-user{
        @extend %df;
        margin-bottom: 20px;
        input,button{
            @extend %df1;
        }
        .el-input{
            margin-right: 10px;
        }
    }

</style>
