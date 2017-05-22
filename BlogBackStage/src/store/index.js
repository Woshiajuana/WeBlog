/**
 * Created by Administrator on 2017/4/18.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import types from './mutation-types.js'
import Util from '../assets/lib/Util'
Vue.use(Vuex);

/**
 * 数据存储
 * */
const state = {
    tab_index: 'all',
    label_arr: [],
    label_loading: false
};

const actions = {
    fetchLabel ({state,commit}) {
        commit(types.SET_LABEL_LOADING,true);
        Util.fetchLabel( (result) => {
            setTimeout(() => {
                commit(types.SET_LABEL_LOADING,false);
                if(result.status) {
                    var labels = result.data.labels;
                    commit(types.INIT_LABEL,labels);
                }
            },300)
        });
    }
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
    /**全局设置MENU的tab选项值*/
    [ types.SET_TAB_INDEX ] (state,tab_index) {
        state.tab_index = tab_index;
    },
    /**全局设置MENU的标签选项值*/
    [ types.INIT_LABEL ] (state,label_arr) {
        state.label_arr = label_arr;
    },
    /**全局设置MENU的标签选项值*/
    [ types.SET_LABEL_LOADING ] (state,label_loading) {
        state.label_loading = label_loading;
    }
};

export default new Vuex.Store({
    state,
    modules,
    actions,
    mutations
})
