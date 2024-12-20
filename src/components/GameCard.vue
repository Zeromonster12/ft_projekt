<template>
  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">{{ game.title }}</h5>
      <p class="card-text">Genre: {{ game.genre }}</p>
      <p class="card-text">Price: ${{ game.price }}</p>
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
  }
});
</script>

<style scoped></style>