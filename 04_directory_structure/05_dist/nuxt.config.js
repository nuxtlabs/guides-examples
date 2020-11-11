export default {
  /*
   ** Activate components - https://nuxtjs.org/docs/2.x/directory-structure/components#components-module
   */
  components: true,

  /*
   ** Global CSS - https://nuxtjs.org/docs/2.x/features/configuration#pre-processors
   */
  css: ['~/assets/main.css'],

  /*
   ** static generation
   */
  target: 'static',

  /*
   ** generate property
   */
  generate: {
    subFolders: false,
    fallback: '404.html',
    exclude: [/admin/],
    dir: 'my-dist',
  },
}
