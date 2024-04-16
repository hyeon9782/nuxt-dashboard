<script setup lang="ts">
// auto import 가능!
// const { x, y } = useMouse();

// plugins에서 정의한 함수 사용하기
const { $hello } = useNuxtApp();
$hello("dddd");

// middleware 사용하기
definePageMeta({
  middleware: "log",
});

// 전역 상태 가져오기
const color = useColor();

// pinia 가져오기
const store = useCounterStore();
</script>

<template>
  <div class="Main">
    HELLO NUXT
    <IconsBell />
    <!-- 마크다운을 읽는 패키지
    <ContentDoc /> -->
    <Counter />
    <Color />
    index : {{ color }}
    <button @click="color = 'black'">change</button>
    <span>{{ store.count }}</span>

    <!-- <div>{{ x }} , {{ y }}</div> -->
    <img src="@/assets/flutter.png" alt="nuxt" />
    <img src="/chart.svg" alt="nuxt" />
  </div>
</template>
