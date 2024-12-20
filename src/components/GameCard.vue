<template>
  <div class="card mb-3" @click="handleCardClick">
    <img :src="`/images/${game.image}`" class="card-img-top" alt="Game image">
    <div class="card-body">
      <h5 class="card-title">{{ game.title }}</h5>
      <p class="card-text">Genre: {{ game.genre }}</p>
      <p class="card-text">Price: {{ game.price }}€</p>
      <button class="btn btn-add-to-cart mt-3" @click.stop="handleButtonClick">Add to Cart</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "GameCard",
  props: {
    game: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleCardClick() {
      this.$emit('card-click', this.game);
    },
    handleButtonClick() {
      this.$emit('add-to-cart', this.game);
    }
  }
});
</script>

<style scoped></style>