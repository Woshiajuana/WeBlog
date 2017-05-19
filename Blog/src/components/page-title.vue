<template>
    <h1 class="page-title" v-text="title"></h1>
</template>
<script>
    export default {
        name: 'page-title',
        props: [ 'title' ]
    }
</script>
<style lang="scss">
    @import "../assets/scss/define";
    .page-title{
        @extend %f16;
        @extend %fwn;
        @extend %c3;
        @extend %oh;
        @extend %pr;
        @extend %cd;
        line-height: 80px;
        height: 80px;
        width: 420px;
        white-space: nowrap;
        padding-left: 10px;
        text-overflow: ellipsis;
        &:after{
            @extend %pa;
            @extend %l0;
            @extend %t50;
            content: '';
            width: 3px;
            height: 24px;
            margin-top: -12px;
            background-color: #1c8de0;
        }
    }
</style>
