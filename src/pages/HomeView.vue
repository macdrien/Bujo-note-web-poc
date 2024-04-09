<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <div class="homeView">
    <h1>Welcome</h1>
    <div class="options">
      <button @click="() => router.push({ name: 'write' })">Noter</button>
      <button @click="() => router.push({ name: 'notes' })">Lister</button>
    </div>
  </div>
</template>

<style scoped>
.homeView {
  padding: 10px;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}

.options {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

button {
  border-radius: 50%;
  width: 4em;
  height: 4em;
  font-size: 2em;
}
</style>