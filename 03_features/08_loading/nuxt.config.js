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
   ** Set ssr to false to see the loading indicator - https://nuxtjs.org/guides/features/rendering-modes
   */
  // ssr: 'false',

  /*
   ** modifying the loading indicator for spa  - https://nuxtjs.org/guides/features/loading
   */
  loadingIndicator: {
    name: 'chasing-dots',
    color: 'purple',
    background: 'green',
  },

  /*
   ** modifying the default loader
   */
  loading: {
    color: 'DodgerBlue',
    height: '10px',
    continuous: true,
    duration: 3000,
  },

  /*
   ** importing a custom loader. this will overwrite the default loader above
   */
  loading: '~/components/LoadingBar.vue',
}
