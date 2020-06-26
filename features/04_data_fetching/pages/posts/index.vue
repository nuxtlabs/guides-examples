<template>
<div>
  <h1>Posts</h1>
  <section>
    <div>
      <h2>Posts from AsyncData</h2>
      <ul>
        <li v-for="post in posts" :key="post.id">
         <NuxtLink :to="{ name: 'posts-id', params: { id: post.id } }">{{ post.title }}</NuxtLink>
        </li>  
      </ul>
    </div>
    <div>
      <h2>Posts from Fetch</h2>
      <BlogPosts />
    </div>
  </section>
</div>
</template>
<script>
export default {
  layout: 'posts',
  async asyncData({$http}) {
    const posts = await $http.$get('https://api.nuxtjs.dev/posts')
    return { posts };
  },
}
</script>
<style scoped>
section {
  display: flex;
  flex-direction: column;
}
@media (min-width: 480px) {
  section {
    flex-direction: row;
  }
  section > div {
    width: 50%;
  }
}
ul {
  list-style: none;
  text-align: left;
  padding: 0 1rem;
}
li {
  margin-bottom: 0.5rem;
}
li:first-letter {
  text-transform: uppercase;
}
img{
  width: 50px;
  height:50px;
}
</style>
