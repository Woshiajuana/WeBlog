<template>
    <div class="container-box"
             v-loading="is_loading"
             element-loading-text="loading~~~">
            <div class="container-content label-content">
                <el-input
                    class="input-new-tag"
                    v-if="inputVisible"
                    v-model="inputValue"
                    ref="saveTagInput"
                    size="mini"
                    @blur="handleInputConfirm"
                ></el-input>
                <el-button class="button-new-tag"
                           v-else
                           size="small"
                           @click="showInput">+ 添加新标签</el-button>
                <div class="label-box">
                    <el-tag
                        :key="tag"
                        v-for="tag in labelArr"
                        :closable="true"
                        :close-transition="false"
                        @close="handleClose(tag)"
                    >{{tag}}</el-tag>
                </div>
            </div>
        </div>
</template>
<script>
    import Util from '../../assets/lib/Util'
    import types from '../../store/mutation-types'
    export default {
        name: 'label',
        data() {
            return {
                is_loading: false,
                inputVisible: false,
                inputValue: ''
            };
        },
        computed: {
            labelArr () {
                var label_arr = [],
                    labels = this.$store.state.label_arr;
                labels.forEach((item,index) => {
                    label_arr.push(item.label)
                });
                return label_arr;
            }
        },
        created () {
            this.$store.commit(types.SET_TAB_INDEX,'3');
        },
        methods: {
            handleClose(tag) {
                this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            },
            showInput() {
                this.inputVisible = true;
                this.$nextTick( () => {
                    this.$refs.saveTagInput.$refs.input.focus();
                });
            },
            handleInputConfirm() {
                if(!this.inputValue.trim()) {
                    this.inputVisible = false;
                    this.inputValue = '';
                    return;
                }
                this.$confirm('是否创建'+ this.inputValue +'标签?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.is_loading = true;
                    Util.createLabel({
                        label: this.inputValue
                    },(result) => {
                       setTimeout( () => {
                           this.is_loading = false;
                           if(result.status){
                               this.$message({type: 'success', message: result.msg});
                               this.fetchLabel();
                           }else{
                               this.$message({type: 'error', message: result.msg});
                           }
                           this.inputVisible = false;
                           this.inputValue = '';
                       },300)
                    });
                }).catch(() => {
                    this.$message({type: 'info', message: '已取消创建标签'});
                    this.inputVisible = false;
                    this.inputValue = '';
                });
            },
            /**获取标签数据*/
            fetchLabel () {
                this.$store.dispatch('fetchLabel');
            },
            handleClose (tag) {
                this.$confirm('是否删除'+ tag +'标签?删除标签，改标签对应下的文章分类将搜索不到', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.is_loading = true;
                    Util.deleteLabel({
                        label: tag
                    },(result) => {
                        setTimeout( () => {
                            this.is_loading = false;
                            if(result.status){
                                this.$message({type: 'success', message: result.msg});
                                this.fetchLabel();
                            }else{
                                this.$message({type: 'error', message: result.msg});
                            }
                            this.inputVisible = false;
                            this.inputValue = '';
                        },300)
                    });
                }).catch(() => {
                    this.$message({type: 'info', message: '已取消删除标签'});
                });
            }
        }
    }
</script>
<style lang="scss">
    @import "../../assets/scss/define";
    .label-content{
        width: 500px;
        input {
            height: 28px !important;
            line-height: 28px !important;
        }
    }
    .label-box{
        margin-top: 20px;
        .el-tag{
            margin: 10px 20px 10px 0;
        }
    }

</style>
