<template>
  <div>
    <TheHeader />
    <main>
      <Nuxt keep-alive :keep-alive-props="{ max: 10 }" />
    </main>
  </div>
</template>


