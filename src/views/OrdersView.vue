<template>
  <main class="container mt-5">
    <div class="row w-100">
      <div class="col-12">
        <h2>Order List</h2>
        <div v-if="orders.length === 0" class="alert alert-warning">
          No orders found.
        </div>
        <div v-else>
          <div v-for="order in orders" :key="order.id" class="mb-4 p-3 border rounded">
            <p><strong>Order ID:</strong> {{ order.id }}</p>
            <p><strong>Status:</strong> {{ order.status }}</p>
            <p><strong>Created at:</strong> {{ order.createdAt }}</p>
            <p><strong>Total:</strong> €{{ order.total }}</p>
            <ul>
              <li v-for="(item, index) in order.items" :key="index">
                {{ item.title }} - €{{ item.price }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from '@/stores/CartStore';

export default defineComponent({
  name: 'OrdersView',
  data() {
    return {
      orders: []
    };
  },
  mounted() {
    const cartStore = useCartStore();
    cartStore.loadOrders();
    this.orders = cartStore.orders;
  }
});
</script>

<style scoped>
</style>