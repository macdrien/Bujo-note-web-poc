<script setup lang="ts">
import { ref } from 'vue';

const identifier = ref<String>('');
const password = ref<String>('');
</script>

<template>
  <div class="loginView">
    <h1>Se connecter</h1>
    <div class="form">
      <div class="formField">
        <p>Pseudo / Email :</p>
        <input v-model="identifier" type="text" required />
      </div>
      <div class="formField">
        <p>Mot de passe :</p>
        <input v-model="password" type="text" required />
      </div>
      <button class="submit">Se connecter</button>
    </div>
  </div>
</template>

<style scoped>
.loginView {
  height: 100vh;
  width: 100vw;
  padding: 5px;
  display: flex;
  flex-direction: column;
}
</style>