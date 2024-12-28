<template>
  <div class="container mt-5 game-detail-view-container">
    <BackButton />
    <div v-if="game" class="row">
      <div class="col-md-4">
        <img :src="`/images/${game.image}`" class="img-fluid mb-4 rounded-4" alt="Game image">
      </div>
      <div class="col-md-8">
        <h1>{{ game.title }}</h1>
        <div class="game-details mt-5">
          <p><strong>Genre:</strong> {{ game.genre }}</p>
          <p><strong>Price:</strong> ${{ game.price }}</p>
          <p><strong>Rating:</strong> {{ game.rating }}</p>
          <p><strong>Release Date:</strong> {{ game.releaseDate }}</p>
          <button @click="cartStore.addItem(game)" class="btn btn-add-to-cart mt-4">Add to Cart</button>
        </div>
      </div>
    </div>
    <div v-else class="alert alert-warning" role="alert">
      Game not found.
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import gamesData from '@/GamesData.json';
import { useCartStore } from '@/stores/CartStore';
import BackButton from '@/components/BackButton.vue';

export default defineComponent({
  name: "GameDetailView",
  components: {
    BackButton
  },
  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },
  data() {
    return {
      game: null,
      cartStore: useCartStore()
    };
  },
  watch: {
    id: {
      immediate: true,
      handler: 'fetchGame'
    }
  },
  methods: {
    fetchGame() {
      const gameId = parseInt(this.id as string);
      this.game = gamesData.find(g => g.id === gameId);
    }
  }
});
</script>

<style scoped>
.container {
  max-width: 800px;
}
.img-fluid {
  max-height: 400px;
  object-fit: cover;
}
</style>