<template>
  <header>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">Home page</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/fun">Fun page</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/more-fun">More Fun page</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
}
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