<template>
    <div>
      <h1>Plugins External</h1>
      <h2>
        <NuxtLink to="/posts/45">➡ Click to see redirected post</NuxtLink>
      </h2>
        <ul v-for="post in posts" :key="post.id">
          <li>
            <NuxtLink :to="`posts/${post.id}`">{{post.title}}</NuxtLink>
          </li>
        </ul>
    </div>
</template>


<script>
export default {
  async asyncData ({ $axios }) {
      const  posts  = await $axios.$get(`https://api.nuxtjs.dev/posts`)
      return { posts }
    } 
}
</script>