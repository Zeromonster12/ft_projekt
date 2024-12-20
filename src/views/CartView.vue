<script setup lang="ts">
import { useCartStore } from '@/stores/CartStore';

const cartStore = useCartStore();
</script>

<template>
  <main>
    <h1>Your Cart</h1>
    <div v-if="cartStore.items.length > 0">
      <ul>
        <li v-for="item in cartStore.items" :key="item.id">
          <img :src="`/images/${item.image}`" alt="Game image" width="50">
          <span>{{ item.title }}</span>
          <span>${{ item.price }}</span>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Your cart is empty.</p>
    </div>
  </main>
</template>

<style scoped>
main {
  padding: 20px;
}

h1 {
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

img {
  margin-right: 10px;
}
</style>