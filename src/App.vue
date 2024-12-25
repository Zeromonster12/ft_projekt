<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <header>
    <Nav />
  </header>

  <RouterView />
  <Footer />
</template>

