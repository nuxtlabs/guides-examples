<template>
    <div>
      <h1>Modules</h1>
      <section>
        <ul v-for="mountain in mountains" :key="mountain.id">
          <li>{{mountain.title}}</li>
        </ul>
      </section>
    </div>
</template>

<script>
export default {
    async asyncData({ app }) {
      app.nuxtHello('Nuxters')
    try {
      const mountains = await app.$nuxtApi('mountains')
      return {
        mountains,
      }
    } catch (error) {
      console.error(error)
    }
  },
}
</script>
<style scoped>
section{
  max-width:800px;
  margin: 0 auto;
}
</style>