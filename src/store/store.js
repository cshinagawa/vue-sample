import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from "./mutations";
import actions from "./actions";

Vue.use(Vuex)

export default new Vuex.Store({
  // state: {
  //     posts: [
  //         { id: 1, body: 'test1'},
  //         { id: 2, body: 'test2'},
  //         { id: 3, body: 'test3'}
  //     ]
  // }
    state: {
        isFetching: false,
        posts: [],
        error: null
    },
    mutations,
    actions
});
