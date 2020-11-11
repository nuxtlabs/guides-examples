export default {
    /*
    ** Activate components - https://nuxtjs.org/docs/2.x/directory-structure/components#components-module
    */
    components: true,

    /*
    ** Global CSS - https://nuxtjs.org/docs/2.x/features/configuration#pre-processors
    */
    css: [
        '~/assets/main.css'
    ],

    /*
    ** Plugins - https://nuxtjs.org/docs/2.x/directory-structure/plugins
    */
    plugins: [
        '~/plugins/axios.js'
    ],

    /*
    ** Modules - https://nuxtjs.org/docs/2.x/directory-structure/modules
    */
    modules: [
        '@nuxtjs/axios'
  ],
}