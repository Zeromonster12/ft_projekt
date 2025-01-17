import { defineStore } from 'pinia';

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    items: JSON.parse(localStorage.getItem('cartItems') || '[]'),
    orders: JSON.parse(localStorage.getItem('orders') || '[]')
  }),

  getters: {
    getItemCount(state) {
      return state.items.length;
    },
    totalPrice(state) {
      return state.items.reduce((total, item) => total + item.price, 0).toFixed(2);
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
    },
    createOrder() {
      const newOrder = {
        id: Date.now(),
        items: [...this.items],
        total: this.totalPrice,
        status: 'pending',
        createdAt: new Date().toISOString()
      };
      this.orders.push(newOrder);
      localStorage.setItem('orders', JSON.stringify(this.orders));
      this.clearCart();
    },
    loadOrders() {
      this.orders = JSON.parse(localStorage.getItem('orders') || '[]');
    },
    updateOrderStatus(orderId, status) {
      const order = this.orders.find(order => order.id === orderId);
      if (order) {
        order.status = status;
        localStorage.setItem('orders', JSON.stringify(this.orders));
      }
    }
  }
});