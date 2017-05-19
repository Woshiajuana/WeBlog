<template>
    <div class="search-box">
        <input type="text" @keyup.enter="searchByKeyWords" v-model="search_key_words" placeholder="请输入检索关键词" class="search-input">
        <i @click="clearInput()" class="search-clear" v-show="search_key_words">
            <svg slot="icon" class="close-btn-icon">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close-icon"></use>
            </svg>
        </i>
        <i @click="searchByKeyWords" class="search-btn">
            <svg slot="icon" class="search-btn-icon">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#search-btn-icon"></use>
            </svg>
        </i>
    </div>
</template>
<script>
    export default {
        name: 'search-box',
        props: [ 'value' ],
        created () {
            this.search_key_words = this.value;
        },
        data () {
            return {
                search_key_words: ''
            }
        },
        methods: {
            clearInput () {
                this.search_key_words = '';
                this.focus();
            },
            searchByKeyWords () {
                this.$emit('searchByKeyWords',this.search_key_words);
            },
            focus () {
                this.$el.getElementsByTagName('input')[0].focus()
            }
        },
        watch: {
            value (val) {
                this.search_key_words = val
            },
            search_key_words (newVal) {
                this.$emit('input', newVal);
            }
        }
    }
</script>
<style lang="scss">
    @import "../assets/scss/define";
    .search-box{
        @extend %pr;
        @extend %df;
        @extend %f14;
        @extend %ma;
        width: 85%;
        height: 45px;
        max-width: 600px;
        line-height: 45px;
        padding-left: 15px;
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
    .search-input{
        @extend %df1;
        height: 45px;
        border: none;
        padding-right: 10px;
        background-color: transparent;
    }
    .search-btn{
        @extend %pr;
        @extend %cp;
        width: 45px;
        height: 45px;
        &:hover{
            .search-btn-icon{
                fill: #333;
            }
        }
    }
    .search-clear{
        @extend %pr;
        @extend %cp;
        width: 20px;
        height: 45px;
        &:hover{
            .close-btn-icon{
                fill: #999;
            }
        }
    }
    .search-btn-icon{
        @extend %pa;
        @extend %t50;
        @extend %l50;
        width: 20px;
        height: 20px;
        margin-top: -10px;
        margin-left: -10px;
        fill: #999;
        transition: fill .3s;
    }
    .close-btn-icon{
        @extend %pa;
        @extend %t50;
        @extend %l50;
        width: 14px;
        height: 14px;
        margin-top: -7px;
        margin-left: -7px;
        fill: #ccc;
        transition: fill .3s;
    }
</style>
