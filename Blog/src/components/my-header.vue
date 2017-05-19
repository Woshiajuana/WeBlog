<template>
    <header class="header-wrap">
        <div class="header-container">
            <page-title :title="title"></page-title>
            <nav-bar></nav-bar>
        </div>
    </header>
</template>
<script>
    import NavBar from './nav-bar.vue'
    import PageTitle from './page-title.vue'
    export default {
        name: 'my-header',
        computed: {
            title () {
                return this.$store.state.title;
            }
        },
        components: {
            NavBar,
            PageTitle
        }
    }
</script>
<style lang="scss">
    @import "../assets/scss/define";
    .header-wrap{
        @extend %pf;
        @extend %t0;
        @extend %l0;
        @extend %r0;
        z-index: 1;
        transform: translateZ(0);
        background-color: #f5f5f5;
    }
    .header-container{
        @extend %ma;
        @extend %pr;
        height: 80px;
        width: 800px;
    }
</style>
