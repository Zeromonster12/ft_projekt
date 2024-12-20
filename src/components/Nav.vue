<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item px-5">
            <router-link class="nav-link" to="/">
              <font-awesome-icon icon="home" class="px-1"/> Home
            </router-link>
          </li>
          <li class="nav-item px-4">
            <router-link class="nav-link" to="/games">
              <font-awesome-icon icon="gamepad" class="px-1"/> Games
            </router-link>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item mx-5 position-relative">
            <router-link class="nav-link" to="/cart">
              <font-awesome-icon icon="shopping-cart" />
              <span class="badge position-absolute top-0 start-100 translate-middle">{{ itemCount }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from '@/stores/CartStore';

export default defineComponent({
  name: "Nav",
  data() {
    const cartStore = useCartStore();

    return {
      cartStore
    };
  },
  computed: {
    itemCount() {
      return this.cartStore.getItemCount();
    }
  }
});
</script>

<style scoped>
.badge {
  font-size: 0.75rem;
  padding: 0.25em 0.4em;
}
</style>