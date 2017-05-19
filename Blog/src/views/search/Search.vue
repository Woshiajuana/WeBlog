<template>
    <div class="views-wrap">
        <div class="search-view" :class="{'search-active':is_search}">
            <div class="search-wrap">
                <search-box @searchByKeyWords="searchByKeyWords" v-model="search_key_words"></search-box>
                <div class="key-words-wrap">
                    <span>关键字：</span>
                    <a href="#/search/vue">vue.js</a>
                    <a href="#/search/node">node.js</a>
                    <a href="#/search/java">java</a>
                </div>
            </div>
            <div class="result-wrap">
                <router-view v-on:hasKeyWords="hasKeyWords"></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    import SearchBox from '../../components/search-box.vue'
    import types from '../../store/mutation-types'
    export default {
        name: 'search',
        data () {
            return {
                search_key_words: '',
                is_search: false
            }
        },
        created () {
            this.$store.commit( types.SET_TITLE, '搜索：' )
        },
        methods: {
            searchByKeyWords (key_words) {
                if ( key_words ) {
                    this.is_search = true;
                    this.$router.push('/search/' + key_words);
                } else {
                    this.is_search = false;
                    this.$router.push('/search');
                }
            },
            hasKeyWords (key_words) {
                if ( key_words ) {
                    this.is_search = true;
                    this.search_key_words = key_words;
                }
            }
        },
        components: {
            SearchBox
        }
    }
</script>
<style lang="scss">
    @import "../../assets/scss/define";
    .search-view{
        padding-top: 150px;
        transition: padding .5s;
        &.search-active{
            padding-top: 50px;
        }
    }
    .key-words-wrap{
        @extend %ma;
        width: 85%;
        max-width: 600px;
        line-height: 30px;
        span,a{
            @extend %vam;
        }
        span{
            @extend %f14;
            color: #FF4949;
        }
        a{
            @extend %f12;
            @extend %c9;
            @extend %oh;
            margin: 0 5px;
            transition: all .5s;
            border-bottom: 1px solid transparent;
            &:hover{
                @extend %c3;
                border-bottom: 1px solid #000;
            }
        }
    }
</style>
