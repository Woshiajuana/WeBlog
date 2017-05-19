<template>
    <div class="content-view" v-html="article_con"></div>
</template>
<script>
    import types from '../../../store/mutation-types'
    import Util from '../../../assets/lib/Util'
    import marked from 'marked'
    var rendererMD = new marked.Renderer();
    marked.setOptions({
        renderer: rendererMD,
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false
    });
    marked.setOptions({
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        }
    });
    export default {
        name: 'content',
        data () {
            return {
                article_con: ''
            }
        },
        created () {
            this.fetchArticle(this.$route.params._id);
        },
        methods: {
            fetchArticle (_id) {
                Util.fetchArticle({_id}, (result) => {
                    if (result.status) {
                        var data = result.data,
                            articles = result.data.articles;
                        if(!articles.length) {
                            this.$router.push('/error');
                            return;
                        }
                        this.article_con = marked(articles[0].article_con);
                        this.$store.commit( types.SET_TITLE, data.articles[0].article_title + '：' )
                    } else {
                        this.$router.push('/error');
                    }
                });
            }
        }
    }
</script>
<style lang="scss">
    @import '../../../assets/scss/define';
    .content-view{
        font-size: 13px;
        line-height: 1.8;
        pre{
            @extend %f12;
            padding: 10px;
            background-color: #ddd;
            border-radius: 5px;
            line-height: 1.4;
        }
        h2, h3 {
            font-size: 22px;
        }
        h4, h5, h6 {
            font-size: 18px
        }
    }
</style>
