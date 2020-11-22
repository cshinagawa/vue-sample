import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'
import store from './store/store'

Vue.config.productionTip = false

// グローバル登録
Vue.component("LikeNumber", LikeNumber);

new Vue({
  store,  // 配下のコンポーネントでstoreにアクセスできる
  render: h => h(App),
}).$mount('#app')
