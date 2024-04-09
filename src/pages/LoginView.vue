<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
h
const identifier = ref<String>('');
const password = ref<String>('');

const formValid = computed(() => identifier.value.length && password.value.length);

const save = () => {
  if (formValid) {
    localStorage.setItem('token', [identifier.value, password.value].join(':'));
    router.push({ name: 'home' });
  }
};
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
      <button class="submit" @click="save" :disabled="!formValid">Se connecter</button>
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