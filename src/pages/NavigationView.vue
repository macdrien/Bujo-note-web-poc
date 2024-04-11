<script setup lang="ts">
import { logged, logout } from '../router';
</script>

<template>
  <div class="menu" v-if="logged">
    <h1>Bujo-note</h1>
    <v-icon name="hi-logout" @click="logout" title="Se déconnecter" class="logout" scale="1.5" />
  </div>
</template>

<style scoped>
.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 2em;
  border-bottom: 1px solid var(--disabled);
}

h1 {
  font-size: 1em;
}

.logout {
  position: absolute;
  right: 5px;
}
</style>