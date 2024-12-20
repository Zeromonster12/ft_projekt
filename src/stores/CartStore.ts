import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', () => {
  const items = ref([]); // Ensure items is a reactive reference

  function addItem(item) {
    items.value.push(item); // Access items.value
  }

  function getItemCount() {
    return items.value.length;
  }

  return { items, addItem, getItemCount };
});