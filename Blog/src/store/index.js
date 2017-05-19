/**
 * Created by Administrator on 2017/4/18.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import types from './mutation-types.js'
Vue.use(Vuex);

/**
 * 数据存储
 * */
const state = {
   title: ''
};

/**
 * 模块
 * */
const modules = {

};

/**
 * 提交同步请求
 * */
const mutations = {
    /**全局设置title*/
    [ types.SET_TITLE ] ( state, title ) {
        state.title = title;
    }
};

export default new Vuex.Store({
    state,
    modules,
    mutations
})
