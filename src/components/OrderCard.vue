<!-- filepath: /e:/ft_projekt/src/components/OrderCard.vue -->
<template>
  <div class="mb-4 p-3 order-container">
    <p><strong>Order ID:</strong> {{ order.id }}</p>
    <p>
      <strong>Status:</strong>
      <span :style="{ color: order.status === 'pending' ? 'red' : 'inherit' }">
        {{ order.status }}
      </span>
    </p>
    <p><strong>Created at:</strong> {{ order.createdAt }}</p>
    <p><strong>Total:</strong> €{{ order.total }}</p>
    <ul>
      <li v-for="(item, index) in order.items" :key="index">
        {{ item.title }} - €{{ item.price }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OrderCard',
  props: {
    order: {
      type: Object,
      required: true
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