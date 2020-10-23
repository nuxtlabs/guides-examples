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
    ** env property
    */
    publicRuntimeConfig: {
        baseURL: "https://api.nuxtjs.dev"
    },

    /*
    ** Modules - https://nuxtjs.org/guides/directory-structure/modules
    */
    modules: [
        '@nuxtjs/axios'
    ]

}