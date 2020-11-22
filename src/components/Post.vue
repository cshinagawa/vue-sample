<template>
  <div class="post">
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.body }}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Post',
  computed: {   // store の内容が変わった時に上手くやってくれる
    posts () {
      return this.$store.state.posts
    }
  },
  mounted() {
    this.$store.dispatch('getPosts')
  },
  methods: {
    ...mapActions(['getPosts'])
  }
}
</script>
