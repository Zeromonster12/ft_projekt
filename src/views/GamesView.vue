<template>
  <div>
    <h1>Games</h1>
      <p v-for="game in games" :key="game.id">
        <GameCard :game="game" />
      </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import gamesData from '@/GamesData.json';
import GameCard from '@/components/GameCard.vue';

export default defineComponent({
  name: "GamesView",
  components: {
    GameCard
  },
  data() {
    return {
      games: gamesData
    };
  }
});
</script>

<style scoped></style>