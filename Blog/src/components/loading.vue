<template>
    <p class="loading-prompt">
        <svg class="load-icon">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#load-icon"></use>
        </svg>
        <span>正在加载中···</span>
    </p>
</template>
<script>
    export default {
        name: 'loading'
    }
</script>
<style lang="scss">
    @import "../assets/scss/define";
    .loading-prompt{
        @extend %tac;
        @extend %c9;
        padding: 30px 0;
        span{
            @extend %vam;
        }
    }
    .load-icon{
        @extend %vam;
        width: 20px;
        height: 20px;
        margin-right: 10px;
        fill: #999;
        animation: rotate360 1s linear infinite;
    }
    .animated {
        animation-duration: 1s;
        animation-fill-mode: both;
    }
</style>
