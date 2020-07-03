export default {
    /*
    ** Activate components - https://nuxtjs.org/guides/directory-structure/components#components-module
    */
    components: true,

    /*
    ** Global CSS - https://nuxtjs.org/guides/features/configuration#pre-processors
    */
    css: [
        '~/assets/main.css'
    ],

    /*
    ** Build Modules - https://nuxtjs.org/guides/directory-structure/modules
    */
    buildModules: [
        '~/modules/nuxt-api',
    ],
    /*
    ** Modules - https://nuxtjs.org/guides/directory-structure/modules
    */
    modules: [
        '~/myModule'
     ]
}