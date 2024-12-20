<template>
  <main>
    <h1>Your Cart</h1>
    <div v-if="cartStore.items.length > 0">
      <ul>
        <li v-for="(item, index) in cartStore.items" :key="index">
          <img :src="`/images/${item.image}`" alt="Game image" width="50">
          <span>{{ item.title }}</span>
          <span>${{ item.price }}</span>
          <button @click="cartStore.removeItem(index)">Remove</button>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Your cart is empty.</p>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from '@/stores/CartStore';

export default defineComponent({
  name: "CartView",
  data() {
    const cartStore = useCartStore();
    return {
      cartStore,
    };
  }
});
</script>

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