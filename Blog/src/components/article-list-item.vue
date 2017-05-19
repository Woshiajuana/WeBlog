<template>
    <div class="article-list-item">
        <a :href="'#/article/' + article_type + '/content/' + _id" class="article-list-item-title" v-text="article_title"></a>
        <p class="article-list-item-prompt">
            <svg class="article-list-item-type-icon">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#bookmark-icon"></use>
            </svg>
            <a :href="'#/article/'+article_type" class="article-list-item-type" v-text="article_type.toUpperCase()"></a>
            <svg class="article-list-item-time-icon">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#time-icon"></use>
            </svg>
            <span class="article-list-item-time">{{article_time | articleTime}}</span>
        </p>
    </div>
</template>
<script>
    import Tool from '../assets/lib/Tool'
    export default {
        name: 'article-list-item',
        props: [ 'article_href', 'article_type', 'article_title', 'article_time','_id'],
        filters: {
            articleTime (article_time) {
                return Tool.format('yyyy-MM-dd hh:mm',new Date(article_time))
            }
        }
    }
</script>
<style lang="scss">
    @import "../assets/scss/define";
    .article-list-item-time-icon,
    .article-list-item-type-icon{
        @extend %vam;
        width: 14px;
        height: 14px;
        fill: #999;
        margin-right: 5px;
    }
    .article-list-item-time,
    .article-list-item-type{
        @extend %vam;
        @extend %oh;
        color: #bbb;
        text-align: left;
        height: 20px;
        line-height: 20px;
    }
    .article-list-item-type{
        @extend %dib;
        transition: color .3s;
        width: 100px;
        &:hover{
            @extend %c6;
        }
    }
    .article-list-item-time{
        @extend %dib;
        width: 110px;
    }
    .article-list-item{
        @extend %pr;
        @extend %db;
        @extend .animated;
        @extend .fadeIn;
        padding: 10px 20px;
        max-width: 800px;
        border-bottom: 1px solid #ddd;
        &:last-child{
            border-bottom: none;
            margin-bottom: 100px;
        }
    }
    .article-list-item-title{
        @extend %oh;
        @extend %c6;
        font-size: 13px;
        transition: color .3s;
        line-height: 1.8;
        &:hover{
            @extend %c0;
        }
    }
    .article-list-item-prompt{
        @extend %oh;
        @extend %f12;
        @extend %tar;
        @extend %c9;
        height: 20px;
        line-height: 20px;
    }
    .result-prompt,
    .result-null-prompt{
        @extend .animated;
        @extend .fadeIn;
    }
    .animated {
        animation-duration: 1s;
        animation-fill-mode: both;
    }
    @keyframes fadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
    .fadeIn {
        animation-name: fadeIn;
    }
</style>
