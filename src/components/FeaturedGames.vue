<template>
  <div class="featured-games">
    <h2 class="text-center my-3">Featured Games</h2>
    <div class="row justify-content-center">
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-2 mb-3"
        v-for="game in featured"
        :key="game.id"
      >
        <div class="card p-3 featured-card">
          <img :src="`/images/${game.image}`" class="card-img-top" alt="Game image" />
          <div class="card-body">
            <h5>{{ game.title }}</h5>
            <p>Price: €{{ game.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import gamesData from '@/GamesData.json';

export default defineComponent({
  name: 'FeaturedGames',
  data() {
    return {
      featured: gamesData.slice(0, 6)
    };
  }
});
</script>

<style scoped>

</style>