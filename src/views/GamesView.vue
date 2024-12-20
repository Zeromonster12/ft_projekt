<template>
  <div class="games-view">
    <div class="row justify-content-center mx-5 mt-5 games-container">
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" v-for="game in games" :key="game.id">
        <GameCard @card-click="showGameDetails" @add-to-cart="addToCart" :game="game" />
      </div>
    </div>
  </div>
</template>

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
  setup() {
    const cartStore = useCartStore();
    return {
      games: gamesData,
      cartStore
    };
  },
  methods: {
    showGameDetails(game) {
      this.$router.push({ name: 'GameDetails', params: { id: game.id } });
    },
    addToCart(game) {
      this.cartStore.addItem(game);
    }
  }
});
</script>

<style scoped></style>