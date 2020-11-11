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
    ** Head Property - https://nuxtjs.org/docs/2.x/features/meta-tags-seo
    */
    head: {
        bodyAttrs: {
            class: 'bodyAttrs bodyAttrs2'
        },
        htmlAttrs: {
            class: 'htmlAttrs'
        }
    }  
}