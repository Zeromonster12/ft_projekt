<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link mb-2 mb-lg-0" to="/">
              <font-awesome-icon icon="home" class="px-1"/> Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link mb-2 mb-lg-0" to="/games">
              <font-awesome-icon icon="gamepad" class="px-1"/> Games
            </router-link>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link mb-2 mb-lg-0" to="/orders">
              <font-awesome-icon icon="clipboard" class="px-1"/>Orders
            </router-link>
          </li>
          <li class="nav-item position-relative">
            <router-link class="nav-link" to="/cart">
              <font-awesome-icon icon="shopping-cart" />
              <span class="badge position-absolute top-0 start-100 translate-middle">{{ cartStore.getItemCount }}</span>
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
    return {
      cartStore: useCartStore()
    };
  }
});
</script>

<style scoped>
.navbar {
  background-color: #daff85;
  color: black;
  min-height: 75px;
  box-shadow: 0 5px 0 rgba(0, 0, 0, 1);
  border-radius: 0 0 20px 20px;
}

.navbar-nav .nav-link {
  color: rgb(0, 0, 0) !important;
  background-color: #ffffff !important;
  border: solid 1px #000000 !important;
  font-size: 18px !important;
  font-weight: 600 !important;
  border-radius: 30px;
  transition: 0.2s ease-in-out !important;
  padding: 10px 15px !important;
}

.navbar-nav .nav-link:hover {
  color: rgb(255, 255, 255) !important;
  background-color: #000000 !important;
  border: solid 1px #000000 !important;
  border-radius: 30px;
  transition: 0.2s ease-in-out !important;
}

.badge {
  font-size: 12px !important;
  padding: 4px 6.4px !important;
}
</style>