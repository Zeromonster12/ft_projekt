<template>
  <main>
    <h1>Your Cart</h1>
    <CartItemList />
    <div v-if="cartStore.items.length > 0">
      <div class="cart-summary">
        <p>Total Price: ${{ totalPrice }}</p>
        <button @click="checkout" class="btn btn-primary">Proceed to Checkout</button>
        <button @click="clearCart" class="btn btn-danger">Empty Cart</button>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import { useCartStore } from '@/stores/CartStore';
import CartItemList from '@/components/CartItemList.vue';

export default defineComponent({
  name: "CartView",
  components: {
    CartItemList
  },
  data() {
    const cartStore = useCartStore();
    return {
      cartStore
    };
  },
  computed: {
    totalPrice() {
      return this.cartStore.totalPrice();
    }
  },
  methods: {
    checkout() {
      alert('Proceeding to checkout...');
      // Implement checkout logic here
    },
    clearCart() {
      this.cartStore.clearCart();
    }
  }
});
</script>

<style scoped>
main {
  padding: 20px;
}

h1 {
  margin-bottom: 20px;
}

.cart-summary {
  margin-top: 20px;
}

.cart-summary p {
  font-size: 1.2em;
  font-weight: bold;
}

.btn {
  margin-right: 10px;
}
</style>