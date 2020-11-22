import MUTATION_TYPES from "./mutation-types";

// ミューテーションを定数定義
export const mutations = {
    [MUTATION_TYPES.GET_POSTS_REQUEST] (state){
        state.isFetching = true
    },
    [MUTATION_TYPES.GET_POSTS_SUCCESS] (state, posts){
        state.isFetching = false
        state.posts = posts
    },
    [MUTATION_TYPES.GET_POSTS_REQUEST] (state, err){
        state.isFetching = false
        state.posts = null
        state.error = err
    }
}