<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="layout">
    <RouterView />
  </div>
</template>

<style>
#layout {
  font-family: Avenir, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active{
  color: #42b983;
}

h2{
  font-size: 20px;
}
</style>
