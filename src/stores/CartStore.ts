import { defineStore } from 'pinia';

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    items: JSON.parse(localStorage.getItem('cartItems') || '[]')
  }),
  getters: {
    getItemCount(state) {
      return state.items.length;
    },
    totalPrice(state) {
      return state.items.reduce((total, item) => total + item.price, 0).toFixed(2);;
    }
  },
  actions: {
    addItem(item) {
      this.items.push(item);
      this.saveCart();
    },
    removeItem(index) {
      if (index >= 0 && index < this.items.length) {
        this.items.splice(index, 1);
        this.saveCart();
      }
    },
    clearCart() {
      this.items = [];
      this.saveCart();
    },
    saveCart() {
      localStorage.setItem('cartItems', JSON.stringify(this.items));
    }
  }
});