<template>
  <div>
    Profile
    <span>{{ response.api }}</span>
  </div>
</template>

<script lang="ts" setup>
const response = await $fetch("/api/test");
</script>
