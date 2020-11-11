<template>
  <article>
      <h1>{{ post.title }}</h1>
      <section>
        <img :src="post.image" :alt="post.title">
        <p>{{ post.description }}</p>
      </section>
      <p>
          <button @click="goBack">Back</button>
      </p>
  </article>
</template>
<script>
export default {
  layout: 'posts',

  async asyncData({$http, params}) {
    const post = await $http.$get(`https://api.nuxtjs.dev/posts/${params.id}`)
      return {post}
  },
  methods: {
    goBack(){
      return this.$router.go(-1)
    }
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