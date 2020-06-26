<template>
  <div>
      <h1>{{ post.title }}</h1>
      <p>{{post.description}}</p>
      <NuxtLink to="/external-plugins">Back to Posts</NuxtLink>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios, params }) {
    const post  = await $axios.$get(`https://api.nuxtjs.dev/posts/${params.id}`)
    return { post }
  }
}
</script>