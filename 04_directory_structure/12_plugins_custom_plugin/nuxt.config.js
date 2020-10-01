export default {
  /*
   ** Activate components - https://nuxtjs.org/guides/directory-structure/components#components-module
   */
  components: true,

  /*
   ** Global CSS - https://nuxtjs.org/guides/features/configuration#pre-processors
   */
  css: ['~/assets/main.css'],

  /*
   ** Plugins - https://nuxtjs.org/guides/directory-structure/plugins
   */
  plugins: ['~/plugins/hello.js', '~/plugins/nuxt-api.js'],
}
