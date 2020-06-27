<template>
  <article>
    <p v-if="$fetchState.pending">Fetching post #{{ $route.params.id }} 😴</p>
    <p v-else-if="$fetchState.error">Error while fetching posts 🤬</p>
    <template v-else>
      <h1>{{ post.title }}</h1>
      <section>
        <img :src="post.image" :alt="post.title">
        <p>{{ post.description }}</p>
      </section>
      <p>
          <NuxtLink to="/posts">Back to posts</NuxtLink>
      </p>
    </template>
  </article>
</template>
<script>
export default {
  layout: 'posts',
  data () {
    return {
      post: {}
    }
  },
  async fetch() {
    this.post = await fetch(`https://api.nuxtjs.dev/posts/${this.$route.params.id}`)
      .then(res => res.json())
  }
}
</script>
<style scoped>
article {
  margin: 1rem 0;
}
img{
  height: 200px;
}
p{
  text-align:left;
}
</style>