<template>
  <main class="container mt-5 d-flex justify-content-center">
    <div class="row w-100">
      <div v-if="cartStore.items.length > 0" class="col-12 col-md-8">
        <CartItemList />
      </div>
      <div v-if="cartStore.items.length > 0" class="col-12 col-md-4">
        <div class="p-3 cart-summary">
          <p class="h5 mb-5"><strong>Total Price:</strong> ${{ cartStore.totalPrice }}</p>
          <button @click="checkout" class="btn btn-checkout mb-2 w-100">Proceed to Checkout</button>
          <button @click="cartStore.clearCart" class="btn btn-clear-cart w-100">Empty Cart</button>
        </div>
      </div>
      <div v-else class="col-12">
        <div class="alert alert-empty-cart" role="alert">
          Your cart is empty.
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from '@/stores/CartStore';
import CartItemList from '@/components/CartItemList.vue';

export default defineComponent({
  name: "CartView",
  components: {
    CartItemList
  },
  data() {
    return {
      cartStore: useCartStore()
    };
  },
  methods: {
    checkout() {
      alert('Proceeding to checkout...');
    }
  }
});
</script>

<style scoped>
.card {
  margin-top: 20px;
}
</style>