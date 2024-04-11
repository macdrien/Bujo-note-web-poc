<script setup lang="ts">
import NavigationView from './pages/NavigationView.vue';
</script>

<template>
<div class="layout">
  <NavigationView />
  <RouterView />
</div>
</template>

<style scoped>
.layout {
  height: 100vh;
  width: 100vw;
}
</style>
