<template>
    <div class="views-wrap other-view">
        <dl class="other-box">
            <dt class="other-title">关于我们：</dt>
            <dd class="other-con">开发、测试、前端，我们都是90后</dd>
            <dt class="other-title">关于网站：</dt>
            <dd class="other-con">记录我们的学习之路</dd>
            <dt class="other-title">技术栈：</dt>
            <dd class="other-con">vue + vue-router + vuex + axios + nodejs + express + mongodb</dd>
            <dt class="other-title">联系我们：</dt>
            <dd class="other-con">扣扣群：511047429</dd>
            <dt class="other-title">友情链接：</dt>
            <dd class="other-con">
                <a href="http://www.owulia.com">
                    <svg class="link-icon">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#link-icon"></use>
                    </svg>
                    窝屋里啊
                </a>
            </dd>
            <dd class="other-con">
                <a href="http://www.owulia.com/ink">
                    <svg class="link-icon">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#link-icon"></use>
                    </svg>
                    浪笔头
                </a>
            </dd>
            <dd class="other-con">
                <a href="https://cn.vuejs.org/">
                    <svg class="link-icon">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#link-icon"></use>
                    </svg>
                    VUE
                </a>
            </dd>
        </dl>
    </div>
</template>
<script>
    import types from '../../store/mutation-types'
    export default {
        name: 'other',
        created () {
            this.$store.commit( types.SET_TITLE, '其它：' )
        }
    }
</script>
<style lang="scss">
    @import "../../assets/scss/define";
    .other-view{
        line-height: 1.8;
    }
    .category-box,
    .other-box{
        padding: 0 20px;
    }
    .category-title,
    .other-title{
        @extend %f16;
        @extend %c9;
        margin-top: 10px;
    }
    .category-con,
    .other-con{
        @extend %f14;
        @extend %c6;
        padding-left: 30px;
        a{
            @extend %c6;
            &:hover{
                @extend %c0;
            }
        }
    }
    .link-icon{
        @extend %vam;
        width: 16px;
        height: 16px;
        fill: #999;
    }
</style>
