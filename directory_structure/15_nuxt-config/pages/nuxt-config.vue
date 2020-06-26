<template>
  <div>
    <h1>Nuxt Config</h1>
    <ul v-for="post in posts" :key="post.id">
      <li>{{post.title}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      posts: []
    }
  },
	async asyncData ({ $axios, env }) {
	    const  posts  = await $axios.$get(`${env.apiUrl}/posts`)
	    return { posts }
	}
}
</script>
