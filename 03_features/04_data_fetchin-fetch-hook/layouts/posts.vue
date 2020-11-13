<template>
  <div>
    <TheHeader />
    <main>
      <Nuxt keep-alive :keep-alive-props="{ max: 10 }" />
    </main>
  </div>
</template>


<style>
ul {
  list-style: none;
  text-align: left;
  padding: 0 1rem;
}
li {
  margin-bottom: 0.5rem;
  text-align: center;
}
li:first-letter {
  text-transform: uppercase;
}

</style>