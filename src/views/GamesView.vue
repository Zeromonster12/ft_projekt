<template>
  <div class="games-view">
    <div class="row justify-content-center mx-5 mt-5 games-container">
      <div class="col-12 mb-4 search-container">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search games..."
          class="form-control search-bar"
        />
      </div>
      <div class="col-12 col-sm-  6 col-md-4 col-lg-3 mb-4" v-for="game in filteredGames" :key="game.id">
        <GameCard @click="showGameDetails(game)" :game="game" />
      </div>
    </div>
  </div>
</template>☺☺

<script lang="ts">
import { defineComponent } from 'vue';
import gamesData from '@/GamesData.json';
import GameCard from '@/components/GameCard.vue';
import { useCartStore } from '@/stores/CartStore';

export default defineComponent({
  name: "GamesView",
  components: {
    GameCard
  },
  data() {
    const cartStore = useCartStore();
    return {
      games: gamesData,
      cartStore,
      searchQuery: ''
    };
  },
  computed: {
    filteredGames() {
      return this.games.filter(game =>
        game.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    showGameDetails(game) {
      this.$router.push({ name: 'GameDetailView', params: { id: game.id } });
    }
  }
});
</script>

<style scoped>
</style>