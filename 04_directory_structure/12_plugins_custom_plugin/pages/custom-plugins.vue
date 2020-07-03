<template>
    <div>
      <h1>Plugins</h1>
        <ul v-for="post in posts" :key="post.id">
          <li>
            <NuxtLink :to="`posts/${post.id}`">{{post.title}}</NuxtLink>
          </li>
        </ul>
      <input type="text" @keyup.enter="changeHelloMessage" placeholder="Change me">
      <p>Hello: {{showNewHelloMessage}}</p>

    </div>
</template>


<script>
export default {
  data(){
    return {
      msg: 'This is a button.'
    }
  },
  async asyncData ({ $axios, app }) {
    try {
      const posts  = await app.$nuxtApi('posts') 
      return { posts }
    }  catch (error) {
      console.error(error)
    }
  },
  mounted () {
    this.$hello('mounted')
  },
  methods: {
    changeHelloMessage (event) {
      this.$store.commit('changeHelloValue', event.target.value)
      event.target.value = ''
    },
  },
  computed: {
    showNewHelloMessage() {
      return this.$store.state.helloMsg
    },
  },
}
</script>