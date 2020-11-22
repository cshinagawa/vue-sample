<template>
  <div class="post">
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.body }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Post',
  computed: {   // store の内容が変わった時に上手くやってくれる
    posts () {
      return this.$store.state.posts
    }
  }
}
</script>
