export default function ({ app }, inject) {
  app.nuxtHello = msg => console.log(`Hello ${msg}!`)
  console.log('My Nuxt.js Module')

  const nuxtApiExternal = async function (path) {
    return await fetch('https://api.nuxtjs.dev/' + path)
      .then(res => res.json())
  }
  inject('nuxtApiExternal', nuxtApiExternal)
}
