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
   ** Rendering Modes - https://nuxtjs.org/guides/features/rendering-modes
   */
  ssr: false,

  /*
   ** Head Property - https://nuxtjs.org/guides/features/meta-tags-seo
   */
  head: {
    bodyAttrs: {
      class: 'bodyAttrs bodyAttrs2',
    },
    htmlAttrs: {
      class: 'htmlAttrs',
    },
  },
}
