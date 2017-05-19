<template>
    <!--发表文章-->
    <div class="container-wrap">
        <div class="container-content editor-wrap"
             v-loading="is_loading"
             :element-loading-text="loading_text">
            <p class="prompt-text"><span class="prompt-icon">*</span>文章类型和文章标题：</p>
            <el-input class="input-box" placeholder="请输入标题" v-model="article_title">
                <template slot="prepend">
                    <el-select v-model="article_type" placeholder="请选择文章类型">
                        <el-option
                            v-for="item in options"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </template>
            </el-input>
            <div class="quill-editor-example">
                <p class="prompt-text"><span class="prompt-icon">*</span>正文：</p>
                <textarea id="textarea"></textarea>
            </div>
            <div class="input-btn">
                <el-button v-if="!article" type="default" @click="uploadArticle(0)">保存草稿</el-button>
                <el-button v-if="!article" type="primary" @click="uploadArticle(1)">发布文章</el-button>
                <el-button v-if="article" type="primary" @click="updateArticle()">完成修改</el-button>
            </div>
        </div>
    </div>
    <!--/发表文章-->
</template>
<script>
    import types from '../../store/mutation-types'
    import Util from '../../assets/lib/Util'
    import Tool from '../../assets/lib/Tool'
    import SimpleMDE from 'simplemde'
    export default {
        data() {
            return {
                is_loading: false,
                article_title: '',
                article_type: '',
                options: [{
                    value: 'vue',
                    label: 'vue'
                }, {
                    value: 'html',
                    label: 'html'
                }, {
                    value: 'css',
                    label: 'css'
                }, {
                    value: 'angular',
                    label: 'angular'
                }, {
                    value: 'node',
                    label: 'node'
                }, {
                    value: 'js',
                    label: 'js'
                }],
                simplemde: '',
                article: '',
                article_con: '',
                loading_text: '拼命上传中~~~'
            }
        },
        methods: {
            /**上传文章*/
            uploadArticle (type) {
                if(!this.article_type || !this.article_title || !this.simplemde.value()) {
                    this.$message({
                        showClose: true,
                        message: '请把信息填写完整~~~',
                        type: 'error'
                    });
                    return;
                }
                this.is_loading = true;
                var article = {
                        article_title: this.article_title,
                        article_type: this.article_type,
                        article_is_publish: type ? true : false,
                        article_con: this.simplemde && this.simplemde.value()
                    },
                    error_msg = type ? '发布文章失败' : '保存草稿失败',
                    success_msg = type ? '发布文章成功' : '保存草稿成功';
                setTimeout(() => {
                    Util.uploadArticle(article,(result) => {
                        if(result.status){
                            this.reset();
                            this.$message({
                                showClose: true,
                                message: success_msg,
                                type: 'success'
                            });
                        } else {
                            this.$message({
                                showClose: true,
                                message: error_msg,
                                type: 'error'
                            });
                        }
                    });
                },300);
            },
            /**重置*/
            reset () {
                this.is_loading = false;
                this.article_type = '';
                this.article_title = '';
                this.simplemde && this.simplemde.value("");
            },
            /**获取数据*/
            fetchArticle (_id) {
                this.is_loading = true;
                this.loading_text = '获取文章数据';
                Util.fetchArticle({_id}, (result) => {
                    setTimeout(() => {
                        this.is_loading = false;
                        this.loading_text = '拼命上传中~~~';
                        if (result.status) {
                            this.article = result.data.articles[0];
                            this.article_title = this.article.article_title;
                            this.article_type = this.article.article_type;
                            this.article_con = this.article.article_con;
                        } else {
                            this.$message({
                                showClose: true,
                                message: result.msg,
                                type: 'error'
                            });
                        }
                    },300)
                });
            },
            /**修改文章*/
            updateArticle () {
                if(!this.article_type || !this.article_title || !this.simplemde.value()) {
                    this.$message({
                        showClose: true,
                        message: '请把信息填写完整~~~',
                        type: 'error'
                    });
                    return;
                }
                this.is_loading = true;
                this.article.article_type = this.article_type;
                this.article.article_title = this.article_title;
                this.article.article_con = this.simplemde.value();
                Util.updateArticle(this.article, (result) => {
                    setTimeout(() => {
                        this.is_loading = false;
                        if (result.status) {
                            this.$message({
                                showClose: true,
                                message: result.msg,
                                type: 'success'
                            });
                            window.history.go(-1);
                        } else {
                            this.$message({
                                showClose: true,
                                message: result.msg,
                                type: 'error'
                            });
                        }
                    },300)
                });
            },
            editorOrUpdate (route) {
                var _id = route ? route.params._id : this.$route.params._id;
                if (_id) {
                    this.fetchArticle( _id );
                } else {
                    this.reset();
                    this.article = '';
                    this.$store.commit(types.SET_TAB_INDEX,'2');
                }
            }
        },
        watch: {
            simplemde: function (val) {
                this.simplemde.value(this.article_con);
            },
            '$route': 'editorOrUpdate'
        },
        created () {
            this.editorOrUpdate();
            this.$nextTick( () => {
                setTimeout( () => {
                    this.simplemde = new SimpleMDE({
                        element: document.getElementById("textarea")
                    });
                },500)
            });
        }
    }
</script>
<style lang="scss">
    @import "../../assets/scss/define";
    #textarea{
        @extend %dn;
    }
    .container-wrap{
        font-size: 14px;
    }
    .el-input-group__prepend{
        width: 150px !important;
    }
    .input-btn{
        @extend %pf;
        z-index: 1;
        right: 20px;
        top: 80px;
    }
    .prompt-icon{
        color: red;
    }
    .prompt-text{
        @extend %f20;
        @extend %c3;
        margin-bottom: 10px;
    }
    .quill-editor-example{
        margin-top: 20px;
    }
</style>
