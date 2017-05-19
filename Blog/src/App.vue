<template>
    <div id="app">

        <!--头部-->
        <my-header></my-header>
        <!--/头部-->

        <!--主体内容视图-->
        <router-view></router-view>
        <!--/主体内容视图-->

        <!--svg-->
        <svg-template></svg-template>
        <!--/svg-->
    </div>
</template>

<script>
    import SvgTemplate from './components/svg-template.vue'
    import MyHeader from './components/my-header.vue'
    export default {
        name: 'app',
        components: {
            SvgTemplate,
            MyHeader
        }
    }
</script>

<style lang="scss">
    @import "./assets/scss/reset";
    @import "./assets/scss/common";
</style>
