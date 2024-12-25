<template>
  <div class="newsletter-signup p-5 my-5 text-center">
    <h4 class="mb-4">Join Our Newsletter</h4>
    <input
      type="email"
      placeholder="Enter your email"
      class="form-control mb-3"
    />
    <button class="btn btn-add-to-cart w-100">Sign Up</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NewsletterSignup',
  data() {
    return {
    };
  },
  methods: {
  }
});
</script>

<style scoped>
</style>