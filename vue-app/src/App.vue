<template>
  <div>
    <Navbar />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
