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
   ** generate property
   */
  generate: {
    subFolders: false,
    fallback: '404.html',
    exclude: [/admin/],
    // dir: 'my-dist',
  },
}
