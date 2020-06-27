<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/fun">Fun</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/more-fun">More Fun</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/posts/1">Post 1</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/posts/2">Post 2</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  padding: 0 1rem;
}

nav ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
}

nav ul li {
  padding: 1rem;
  font-size: 1.2rem;
}
</style>
