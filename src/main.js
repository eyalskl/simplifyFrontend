import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/styles/style.scss'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyB6VnvgD2vcWlBcPoKJUvF1bAdMbdQo25M',
        libraries: 'places',
    },
})
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')