<template>
    <div class="views-wrap">
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: 'article'
    }
</script>
<style lang="scss">
    @import "../../assets/scss/define";
    .content-view,
    .comment-view{
        padding: 10px 20px;
    }
</style>
