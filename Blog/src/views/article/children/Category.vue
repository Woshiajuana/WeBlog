<template>
    <div class="category-view">
        <dl class="category-box">
            <dt class="category-title">前端相关：</dt>
            <dd class="category-con">
                <a href="#/article/html">HTML</a>
            </dd>
            <dd class="category-con">
                <a href="#/article/css">CSS</a>
            </dd>
            <dd class="category-con">
                <a href="#/article/javascript">JAVASCRIPT</a>
            </dd>
            <dd class="category-con">
                <a href="#/article/angular">ANGULAR.JS</a>
            </dd>
            <dd class="category-con">
                <a href="#/article/vue">VUE</a>
            </dd>
            <dd class="category-con">
                <a href="#/article/node">NODE.JS</a>
            </dd>
            <dd class="category-con">
                <a href="#/article/tool">开发工具</a>
            </dd>
            <dt class="category-title">开发相关：</dt>
            <dd class="category-con">
                <a href="#/article/java">JAVA</a>
            </dd>
            <dd class="category-con">
                <a href="#/article/php">PHP</a>
            </dd>
            <dd class="category-con">
                <a href="#/article/struts">STRUTS</a>
            </dd>
            <dd class="category-con">
                <a href="#/article/hibernate">HIBERNATE</a>
            </dd>
            <dd class="category-con">
                <a href="#/article/spring">SPRING</a>
            </dd>
            <dd class="category-con">
                <a href="#/article/tool">开发工具</a>
            </dd>
            <dt class="category-title">测试相关：</dt>
            <dd class="category-con">
                <a href="#/article/sql">数据库</a>
            </dd>
            <dd class="category-con">
                <a href="#/article/tool">测试工具</a>
            </dd>
        </dl>
    </div>
</template>
<script>
    import types from '../../../store/mutation-types'
    export default {
        name: 'category',
        created () {
            this.$store.commit( types.SET_TITLE, '分类：' )
        }
    }
</script>
<style lang="scss">
    @import "../../../assets/scss/define";
    .category-view{
        line-height: 1.8;
    }
    .category-list-con{
        a{
            @extend %db;
            @extend %f16;
            @extend %c6;
            line-height: 1.8;
        }
    }
</style>
