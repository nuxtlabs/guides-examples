<template>
  <div>
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Having more fun with Nuxt.js'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
      { 
        hid: 'description', 
        name: 'description', 
        content: 'The amazing Nuxt.js application that teaches me all the cool features of Nuxt.js and lots more fun' }
      ],
    }
  },
  layout: 'fun'
}
</script>
<style scoped>
h1 {
  font-family: Nunito
}
</style>