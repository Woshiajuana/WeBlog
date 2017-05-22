<template>
    <div class="menu-wrap">
        <el-menu :default-active="tabIndex" class="el-menu-vertical-demo">
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-document"></i>全部文章</template>
                <el-menu-item-group v-loading="labelLoading">
                    <el-menu-item index="all"><a href="#/?tab=all">ALL FILES</a></el-menu-item>
                    <el-menu-item v-for="(label_item,label_index) in labelArr" :index="label_item.label"><a :href="'#/?tab='+ label_item.label" v-text="label_item.label.toUpperCase()"></a></el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2"><i class="el-icon-edit"></i><a href="#/editor">发表文章</a></el-menu-item>
            <el-menu-item index="3"><i class="el-icon-star-off"></i><a href="#/label">标签管理</a></el-menu-item>
            <el-menu-item index="4"><i class="el-icon-plus"></i><a href="#/user">用户管理</a></el-menu-item>
        </el-menu>
    </div>
</template>
<script>
    export default {
        name: 'menu',
        data () {
            return {
                is_loading: true
            }
        },
        computed: {
            tabIndex(){
                return this.$store.state.tab_index;
            },
            labelArr () {
                return this.$store.state.label_arr;
            },
            labelLoading () {
                return this.$store.state.label_loading;
            }
        },
        created () {
            this.$store.dispatch('fetchLabel');
        }
    }
</script>
<style lang="scss">
    @import "../assets/scss/define";
    .menu-wrap{
        @extend %pa;
        @extend %bsb;
        top: 60px;
        left: 0;
        width: 200px;
        bottom: 0;
        background-color: #EFF2F7;
        border-right: 1px solid #ddd;
        .el-menu-item-group{
            padding-bottom: 20px;
        }
        .el-menu-item-group{
            .el-menu-item{
                height: 40px;
                line-height: 40px;
            }
        }
    }
    .el-menu-item{
        @extend %pr;
        a{
            @extend %pa;
            @extend %db;
            font-size: 13px;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 0 45px;
            color: inherit;
        }
    }
</style>
