<script setup lang="ts">
// auto import 가능!
const { x, y } = useMouse();
</script>

<template>
  <div class="Main">
    HELLO NUXT
    <IconsBell />
    <div>{{ x }} , {{ y }}</div>
    <img src="@/assets/flutter.png" alt="nuxt" />
    <img src="/chart.svg" alt="nuxt" />
  </div>
</template>
