import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', () => {
  const items = ref([]);

  function addItem(item) {
    items.value.push(item);
  }

  function getItemCount() {
    return items.value.length;
  }

  function removeItem(index) {
    if (index >= 0 && index < items.value.length) {
      items.value.splice(index, 1);
    }
  }

  function clearCart() {
    items.value = [];
  }

  function totalPrice() {
    return items.value.reduce((total, item) => total + item.price, 0); // Calculate total price
  }

  return { items, addItem, getItemCount, removeItem, clearCart, totalPrice };
});