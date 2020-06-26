<template>
  <div>
    <h1>{{post.title}}</h1>
    <p>{{post.description}}</p>
  </div>
</template>
<script>
export default {
  layout: 'posts',
  async asyncData ({params, $http, error}) {
    const id = params.id
    
    try { 
      const post = await $http.$get(`https://api.nuxtjs.dev/posts/${id}`)
      return { post }
    } 
    catch (error) {
      error(error) 
    }
  },
  middleware ({ store, redirect }) {
    const isAuthenticated = store.state.authenticated
    if (!isAuthenticated) {
      return redirect('/')
    }
  }
}
</script>
<style scoped>
div{
  margin: 0 auto;
  max-width: 600px;
}
p{
  text-align:left;
}
</style>