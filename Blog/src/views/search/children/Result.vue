<template>
    <div class="result-wrap">
        <article-list-item
            v-for="(article_list_item,article_list_index) in article_list_arr"
            :article_type="article_list_item.article_type"
            :article_time="article_list_item.article_time"
            :article_title="article_list_item.article_title"
            :_id="article_list_item._id"
        ></article-list-item>
        <p class="result-null-prompt" v-show="!article_list_arr.length">
            <svg class="null-icon">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#null-icon"></use>
            </svg>
            <span>没有搜索到结果</span>
        </p>
        <div class="page-wrap" v-show="article_list_arr.length">
            <el-pagination
                @current-change="handleCurrentChange"
                :current-page="page_num"
                :page-size="page_size"
                layout="total, prev, pager, next, jumper"
                :total="article_total">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    import ArticleListItem from '../../../components/article-list-item.vue'
    import Util from '../../../assets/lib/Util'
    import Tool from '../../../assets/lib/Tool'
    export default {
        name: 'result',
        data () {
            return {
                is_loading: true,
                page_num: +this.$route.query.page_num || 1,
                page_size: 15,
                page_count: '',
                article_total: 0,
                article_list_arr: []
            }
        },
        created () {
            this.$emit('hasKeyWords',this.$route.params.key_words);
            this.fetchArticlesList();
        },
        watch :{
            '$route': 'fetchArticlesList'
        },
        components: {
            ArticleListItem
        },
        methods: {
            /**获取文章列表信息*/
            fetchArticlesList (route) {
                var tab = this.$route.params.category || '';
                var key_word = route ? route.params.key_words: this.$route.params.key_words;
                Util.fetchArticlesList({
                    tab: tab,
                    page_num: this.page_num,
                    page_size: this.page_size,
                    key_word: key_word
                }, (result) => {
                    if ( result.status ) {
                        this.$top(0,true);
                        this.is_loading = false;
                        var data = result.data;
                        this.article_list_arr = data.article_arr;
                        this.page_count = data.page_count;
                        this.article_total = data.article_total;
                    }
                });
            },
            handleCurrentChange (val) {
                this.page_num = val;
                Tool.jumpPage('article/'+ this.$route.params.category +'?page_num=' + this.page_num);
            }
        }
    }
</script>
<style lang="scss">
    @import "../../../assets/scss/define";
    .result-null-prompt{
        @extend %f16;
        @extend %c6;
        @extend %tac;
        padding: 120px 0;
        span{
            line-height: 30px;
        }
    }
    .null-icon{
        @extend %db;
        @extend %ma;
        width: 50px;
        height: 50px;
        fill: #999;
    }
    .result-prompt{
        @extend %tac;
        @extend %c9;
        padding: 30px;
    }
</style>
