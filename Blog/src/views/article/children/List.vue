<template>
    <div class="list-view">
        <Loading v-show="is_loading"></Loading>
        <article-list-item
            v-for="(article_list_item,article_list_index) in article_list_arr"
            :article_type="article_list_item.article_type"
            :article_time="article_list_item.article_time"
            :article_title="article_list_item.article_title"
            :_id="article_list_item._id"
        ></article-list-item>
        <p class="result-null-prompt" v-show="!is_loading && !article_list_arr.length">
            <svg class="null-icon">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#null-icon"></use>
            </svg>
            <span>没有了</span>
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
    import types from '../../../store/mutation-types'
    import Util from '../../../assets/lib/Util'
    import Tool from '../../../assets/lib/Tool'
    import Loading from '../../../components/loading.vue'
    export default {
        name: 'home',
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
            this.fetchArticlesList();
            this.$store.commit( types.SET_TITLE, this.$route.params.category + '：' )
        },
        watch: {
            '$route': 'fetchArticlesList'
        },
        methods: {
            /**获取文章列表信息*/
            fetchArticlesList (route) {
                var tab = this.$route.params.category || '';
                Util.fetchArticlesList({
                    tab: tab,
                    page_num: this.page_num,
                    page_size: this.page_size
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
        },
        components: {
            ArticleListItem,
            Loading
        }
    }
</script>
