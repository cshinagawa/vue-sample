import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      posts: [
          { id: 1, body: 'test1'},
          { id: 2, body: 'test2'},
          { id: 3, body: 'test3'}
      ]
  }
});
