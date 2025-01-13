<template>
  <main class="container mt-5">
    <div class="row w-100">
      <div class="col-12">
        <div v-if="orders.length === 0" class="alert alert-warning">
          No orders found.
        </div>
        <div v-else>
          <OrderCard v-for="order in reversedOrders" :key="order.id" :order="order" />
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from '@/stores/CartStore';
import OrderCard from '@/components/OrderCard.vue';

export default defineComponent({
  name: 'OrdersView',
  components: {
    OrderCard
  },
  data() {
    return {
      orders: []
    };
  },
  computed: {
    reversedOrders() {
      return this.orders.slice().reverse();
    }
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