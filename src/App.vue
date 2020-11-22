<template>
  <div>
    <div>
      <like-header></like-header>
      <LikeNumber></LikeNumber>
    </div>
    <div>
      <Post></Post>
    </div>
  </div>
</template>

<script>
// ローカル登録
import LikeHeader from "./components/LikeHeader";
import Post from "./components/Post";

export default {
  components: {
    LikeHeader,
    Post
  }
}
</script>

<style scoped>
div {
  border: 1px solid blue;
}
</style>
