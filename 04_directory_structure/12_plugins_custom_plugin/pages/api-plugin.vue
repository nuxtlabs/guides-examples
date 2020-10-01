<template>
  <div>
    <h1>Posts</h1>
    <p>List of posts coming from our API Plugin:</p>
    <ul v-for="post in posts" :key="post.id">
      <li>
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    async asyncData({ app }) {
      try {
        const posts = await app.$nuxtApi('posts')
        return { posts }
      } catch (error) {
        console.error(error)
      }
    },
  }
</script>
