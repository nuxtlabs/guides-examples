<template>
    <div>
      <h1>Modules</h1>
      <section>
        <div>
        <h2>Modules Internal</h2>
        <ul v-for="mountain in mountains" :key="mountain.id">
          <li>{{mountain.title}}</li>
        </ul>
      </div>
      <div>
          <h2>Modules External</h2>
          <ul v-for="mountain in mountainsExternal" :key="mountain.id">
          <li>{{mountain.title}}</li>
        </ul>
      </div>
      </section>
    </div>
</template>

<script>
export default {
    async asyncData({ app }) {
      app.nuxtHello('Nuxters')
    try {
      const mountains = await app.$nuxtApi('mountains')
      const mountainsExternal = await app.$nuxtApiExternal('mountains')
      return {
        mountains,
        mountainsExternal
      }
    } catch (error) {
      console.error(error)
    }
  },
}
</script>
<style scoped>
section{
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  max-width:800px;
  margin: 0 auto;
}
</style>