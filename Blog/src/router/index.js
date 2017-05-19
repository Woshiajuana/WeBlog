import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/Home.vue'
import Search from '../views/search/Search.vue'
import Article from '../views/article/Article.vue'
import Other from '../views/other/Other.vue'
import Content from '../views/article/children/Content.vue'
import Result from '../views/search/children/Result.vue'
import Category from '../views/article/children/Category.vue'
import List from '../views/article/children/List.vue'
import Comment from '../views/article/children/Comment.vue'
import Error from '../views/error/Error.vue'

Vue.use(Router);

export default new Router({
    routes: [
        /**首页(重定向)*/
        {
            path: '/',
            redirect: { name: 'home' }
        },
        /**首页*/
        {
            path: '/index',
            name: 'home',
            component: Home
        },
        /**搜索页*/
        {
            path: '/search',
            name: 'search',
            component: Search,
            /**搜索结果页*/
            children: [
                {
                    path: ':key_words',
                    name: 'result',
                    component: Result
                }
            ]
        },
        /**文章页*/
        {
            path: '/article',
            name: 'article',
            component: Article,
            children: [
                /**文章分类页*/
                {
                    path: '',
                    name: 'category',
                    component: Category
                },
                /**文章列表页*/
                {
                    path: ':category',
                    name: 'list',
                    component: List
                },
                /**文章内容页*/
                {
                    path: ':category/content/:_id',
                    name: 'content',
                    component: Content
                },
                /**文章评论页*/
                {
                    path: ':category/content/:_id/comment',
                    name: 'comment',
                    component: Comment
                }
            ]
        },
        /**其它页*/
        {
            path: '/other',
            name: 'other',
            component: Other
        },
        /**错误页*/
        {
            path: '/error',
            name: 'error',
            component: Error
        },
        /**首页(重定向)*/
        {
            path: '*',
            redirect: { name: 'home' }
        }
    ]
})
