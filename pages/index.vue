<script setup lang="ts">
// auto import 가능!
const { x, y } = useMouse();

// plugins에서 정의한 함수 사용하기
const { $hello } = useNuxtApp();
$hello("dddd");

// middleware 사용하기
definePageMeta({
  middleware: "log",
});
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
