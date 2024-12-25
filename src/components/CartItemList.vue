<template>
  <div class="row justify-content-center">
    <div class="col-12 col-md-6">
      <div v-if="items.length > 0">
        <ul class="list-group">
          <li v-for="(item, index) in items" :key="index" class="list-group-item d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <img :src="`/images/${item.image}`" alt="Game image" class="img-thumbnail me-3" width="50">
              <div>
                <h5 class="mb-1">{{ item.title }}</h5>
                <small>${{ item.price }}</small>
              </div>
            </div>
            <button @click="removeItem(index)" class="btn btn-danger btn-sm">Remove</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from '@/stores/CartStore';

export default defineComponent({
  name: "CartItemList",
  data() {
    const cartStore = useCartStore();
    return {
      cartStore
    };
  },
  computed: {
    items() {
      return this.cartStore.items;
    }
  },
  methods: {
    removeItem(index: number) {
      this.cartStore.removeItem(index);
    }
  }
});
</script>

<style scoped>
.img-thumbnail {
  max-height: 50px;
  object-fit: cover;
}
</style>