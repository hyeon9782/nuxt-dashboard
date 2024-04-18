<script lang="ts" setup>
// const { data: products, pending } = await useLazyFetch("/api/products", {
//   transform: (_products) => _products.data,
// });

const { data: productCount, pending } = await useAsyncData("products", () => {
  $fetch("/api/products");
});
</script>

<template>
  <div>
    {{ pending ? "Loading..." : productCount }}
  </div>
</template>
