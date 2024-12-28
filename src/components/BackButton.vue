<template>
  <div>
    <button class="btn btn-back mb-4" @click="$router.back()">Back</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: "BackButton",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
});
</script>

<style lang="css" scoped></style>