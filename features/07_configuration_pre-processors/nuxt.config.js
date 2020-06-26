export default {
    /*
    ** Activate components - https://nuxtjs.org/guides/directory-structure/components#components-module
    */
    components: true,

    /*
    ** Global CSS - https://nuxtjs.org/guides/features/configuration#pre-processors
    */
    css: [
        '~/assets/main.css',
        '~/assets/main.scss'
    ],
    /*
    ** Global style resources - https://www.npmjs.com/package/@nuxtjs/style-resources
    */
    styleResources: {
        scss: ['~/assets/variables.scss']
    },

    /*
    ** Modules - https://nuxtjs.org/guides/directory-structure/modules
    */
   
    modules: [
        '@nuxtjs/style-resources'
    ]
}