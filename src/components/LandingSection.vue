<template>
  <div class="landing-section d-flex align-items-center justify-content-center mt-5">
    <div class="landing-content text-center">
      <h1 class="mb-3">Welcome to the Ultimate Gaming E-Shop</h1>
      <p>
        Find the latest releases, unbeatable deals, and all-time classics. Power up your 
        gaming library and explore endless adventures today.
      </p>
      <router-link to="/games" class="btn btn-add-to-cart mt-3">Explore Games</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LandingSection'
});
</script>

<style scoped>

</style>