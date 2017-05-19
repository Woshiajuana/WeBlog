<template>
    <nav class="nav-wrap">
        <router-link title="首页" class="nav-item" to="/index">
            <span class="nav-item-con">
                <svg class="nav-item-icon">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#home-icon"></use>
                </svg>
            </span>
        </router-link>
        <router-link title="搜索" class="nav-item" to="/search">
            <span class="nav-item-con">
                <svg class="nav-item-icon">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#search-icon"></use>
                </svg>
            </span>
        </router-link>
        <router-link title="类别" class="nav-item hiddenImportant" to="/category">
            <span class="nav-item-con">
                <svg class="nav-item-icon">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#article-icon"></use>
                </svg>
            </span>
        </router-link>
        <router-link title="归档" class="nav-item" to="/article">
            <span class="nav-item-con">
                <svg class="nav-item-icon">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#directory-icon"></use>
                </svg>
            </span>
        </router-link>
        <router-link title="其它" class="nav-item" to="/other">
            <span class="nav-item-con">
                <svg class="nav-item-icon other-icon">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#other-icon"></use>
                </svg>
            </span>
        </router-link>
        <i @click="refreshPage()" title="刷新" class="nav-item router-link-active nav-refresh nav-item-special">
            <span class="nav-item-con">
                <svg class="nav-item-icon other-icon">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#refresh-icon"></use>
                </svg>
            </span>
        </i>
        <i @click="returnTop()" title="返回顶部" class="nav-item router-link-active nav-top nav-item-special">
            <span class="nav-item-con">
                <svg class="nav-item-icon top-icon">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#top-icon"></use>
                </svg>
            </span>
        </i>
        <i @click="returnPage()" title="返回" class="nav-item router-link-active nav-item-special">
            <span class="nav-item-con">
                <svg class="nav-item-icon">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#return-icon"></use>
                </svg>
            </span>
        </i>
    </nav>
</template>
<script>
    export default {
        name: 'nav-bar',
        methods: {
            returnPage () {
                window.history.go(-1);
            },
            refreshPage () {
                window.location.reload(true);
            },
            returnTop () {
                this.$top(0,true)
            }
        }
    }
</script>
<style lang="scss">
    @import "../assets/scss/define";
    .nav-wrap{
        @extend %pa;
        @extend %oh;
        @extend %r0;
        @extend %t50;
        margin-top: -10px;
        height: 30px;
        padding: 0 10px;
        border-bottom: 1px solid #ccc;
        &:after,
        &:before{
            content: '';
            @extend %pa;
            @extend %b0;
            width: 1px;
            height: 5px;
            background-color: #ccc;
        }
        &:after{
            @extend %r0;
        }
        &:before{
            @extend %l0;
        }
    }
    .nav-item{
        @extend %dib;
        @extend %pr;
        @extend %cp;
        @extend %oh;
        width: 20px;
        height: 20px;
        line-height: 20px;
        margin: 5px 5px;
        &.router-link-active{
            .nav-item-icon{
                @extend %w100;
                @extend %h100;
                @extend %t0;
                @extend %l0;
                fill: #58b7ff;
                &.top-icon{
                    top: 3%;
                    left: 3%;
                    width: 94%;
                    height: 94%;
                }
            }
        }
        &:hover{
            &.router-link-active{
                .nav-item-icon{
                    fill: #58b7ff;
                }
            }
            .nav-item-icon{
                fill: #666;
            }
        }
        &.nav-item-special{
            &:hover{
                .nav-item-icon{
                    fill: #999;
                }
            }
            .nav-item-icon{
                fill: #999;
            }
        }
    }
    .nav-item-con{
        @extend %pa;
        @extend %t0;
        @extend %r0;
        @extend %l0;
        @extend %b0;
    }
    .nav-item-icon{
        @extend %pa;
        top: 10%;
        left: 10%;
        width: 80%;
        height: 80%;
        fill: #ccc;
        transition: all .3s;
        &.other-icon{
            top: 15%;
            left: 15%;
            width: 70%;
            height: 70%;
        }
    }
    .nav-text{
        @extend %vam;
    }
    .nav-refresh{
        &:hover{
            animation: rotate360 3s linear infinite;
        }
    }
    .nav-top{
        &:hover{
            .nav-item-icon{
                animation: animate_top 1.5s linear infinite;
            }
        }
    }
</style>
