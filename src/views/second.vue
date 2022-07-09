<script setup>
import loadComponent from '../loadComponent'
</script>

<template>
  <div>
    <h1>Second</h1>
    <em>Route with a component that has been loaded asynchronous</em>
    <component :is="loadComponent({ component: 'dummy-component' })"></component>
  </div>
</template>
