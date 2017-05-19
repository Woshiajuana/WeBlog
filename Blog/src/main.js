
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import router from './router'
import store from './store/index.js'
import './assets/lib/flexible.js'
import 'element-ui/lib/theme-default/index.css'
import ReturnTop from './assets/lib/ReturnTop'
import './assets/lib/highlight.pack'
import './assets/css/highlight.css'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(ReturnTop);

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});
