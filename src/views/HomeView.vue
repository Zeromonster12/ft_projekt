<template>
  <div class="home-view">
    <div class="row justify-content-center mx-5 mt-5 home-container">
      <div class="col-12">
        <LandingSection />
        <FeaturedGames />
        <NewsletterSignup />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FeaturedGames from '@/components/FeaturedGames.vue';
import NewsletterSignup from '@/components/NewsletterSignup.vue';
import LandingSection from '@/components/LandingSection.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    FeaturedGames,
    NewsletterSignup,
    LandingSection
  }
});
</script>

<style scoped>
</style>