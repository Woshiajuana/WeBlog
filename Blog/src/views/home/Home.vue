<template>
    <div class="views-wrap home-view">
        <loading v-show="!article_list_arr.length"></loading>
        <article-list-item
            v-for="(article_list_item,article_list_index) in article_list_arr"
            :article_type="article_list_item.article_type"
            :article_time="article_list_item.article_time"
            :article_title="article_list_item.article_title"
            :_id="article_list_item._id"
        ></article-list-item>
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
    import ArticleListItem from '../../components/article-list-item.vue'
    import types from '../../store/mutation-types'
    import loading from '../../components/loading.vue'
    import Util from '../../assets/lib/Util'
    import Tool from '../../assets/lib/Tool'
    export default {
        name: 'home',
        data () {
             return {
                 page_num: +this.$route.query.page_num || 1,
                 page_size: 15,
                 page_count: '',
                 article_total: 0,
                 article_list_arr: []
             }
        },
        created () {
            this.$store.commit( types.SET_TITLE, '首页：' );
            this.fetchArticlesList();
        },
        watch: {
            '$route': 'fetchArticlesList'
        },
        methods: {
            /**获取文章列表信息*/
            fetchArticlesList (route) {
                Util.fetchArticlesList({
                    page_num: this.page_num,
                    page_size: this.page_size
                },(result) => {
                    if ( result.status ) {
                        this.$top(0,true);
                        var data = result.data;
                        this.article_list_arr = data.article_arr;
                        this.page_count = data.page_count;
                        this.article_total = data.article_total;
                    }
                });
            },
            handleCurrentChange (val) {
                this.page_num = val;
                Tool.jumpPage('?page_num=' + this.page_num);
            }
        },
        components: {
            ArticleListItem,
            loading
        }
    }
</script>
