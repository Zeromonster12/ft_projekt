<template>
  <div v-if="game">
    <h1>{{ game.title }}</h1>
    <img :src="`/images/${game.image}`" alt="Game image">
    <p>Genre: {{ game.genre }}</p>
    <p>Price: ${{ game.price }}</p>
    <p>Rating: {{ game.rating }}</p>
    <p>Release Date: {{ game.releaseDate }}</p>
  </div>
  <div v-else>
    <p>Game not found.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import gamesData from '@/GamesData.json';

export default defineComponent({
  name: "GameDetails",
  data() {
    const route = useRoute();
    const gameId = parseInt(route.params.id);
    const game = gamesData.find(g => g.id === gameId);
    return {
      game
    };
  }
});
</script>

<style scoped></style>