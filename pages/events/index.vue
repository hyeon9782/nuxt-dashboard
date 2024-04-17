<script lang="ts" setup>
const { data: products, pending } = await useLazyFetch("/api/products", {
  transform: (_products) => _products.data,
});
</script>

<template>
  <div>{{ pending ? "Loading..." : products[0].name }}</div>
</template>
