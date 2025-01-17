<!-- filepath: /e:/ft_projekt/src/components/OrderCard.vue -->
<template>
  <div class="mb-4 p-3 order-container">
    <p><strong>Order ID:</strong> {{ order.id }}</p>
    <p>
      <strong>Status: </strong>
      <span :style="{ color: getStatusColor(order.status) }">
        {{ order.status }}
      </span>
    </p>
    <p><strong>Created at:</strong> {{ order.createdAt }}</p>
    <p><strong>Total:</strong> {{ order.total }}€</p>
    <ul>
      <li v-for="(item, index) in order.items" :key="index">
        {{ item.title }} - {{ item.price }}€
      </li>
    </ul>
    <button class="completeBtn" @click="cartStore.updateOrderStatus(order.id, 'complete')">Mark as Complete</button>
    <button class="cancelledBtn" @click="cartStore.updateOrderStatus(order.id, 'cancelled')">Cancel Order</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useCartStore } from '@/stores/CartStore';

export default defineComponent({
  name: 'OrderCard',
  props: {
    order: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      cartStore: useCartStore()
    };
  },
  methods: {
    getStatusColor(status) {
      if (status === 'pending') {
        return 'orange';
      } else if (status === 'complete') {
        return 'green';
      } else if (status === 'cancelled') {
        return 'red';
      }
    }
  }
});
</script>

<style scoped>
.order-container {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
  background-color: #f9f9f9;
}
</style>