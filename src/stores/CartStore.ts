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

  function removeItem(index) {
    if (index >= 0 && index < items.value.length) {
      items.value.splice(index, 1); // Remove the item at the specified index
    }
  }

  return { items, addItem, getItemCount, removeItem };
});