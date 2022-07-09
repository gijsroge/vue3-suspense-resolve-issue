<script setup lang="ts">
// fake async data
await new Promise(resolve => setTimeout(() => resolve(true), 500))
</script>
<template>
  <div>
    <h1>first</h1>
    <em>Route with asycn data</em>
  </div>
</template>
