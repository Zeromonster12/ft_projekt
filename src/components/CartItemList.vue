<template>
  <div v-if="items.length > 0">
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <img :src="`/images/${item.image}`" alt="Game image" width="50">
        <span>{{ item.title }}</span>
        <span>${{ item.price }}</span>
        <button @click="removeItem(index)">Remove</button>
      </li>
    </ul>
  </div>
  <div v-else>
    <p>Your cart is empty.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from '@/stores/CartStore';

export default defineComponent({
  name: "CartItemList",
  data() {
    const cartStore = useCartStore();
    return {
      cartStore
    };
  },
  computed: {
    items() {
      return this.cartStore.items;
    }
  },
  methods: {
    removeItem(index: number) {
      this.cartStore.removeItem(index);
    }
  }
});
</script>

<style scoped>
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