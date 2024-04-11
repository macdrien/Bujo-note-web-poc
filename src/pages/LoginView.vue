<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { login } from '../router';

const router = useRouter();

const identifier = ref<string>('');
const password = ref<string>('');

const formValid = computed(() => identifier.value.length && password.value.length);

const save = () => {
  if (formValid) {
    login(identifier.value, password.value);
  }
};
</script>

<template>
  <div class="view">
    <h1>Se connecter</h1>
    <div class="form">
      <div class="formField">
        <p>Pseudo / Email :</p>
        <input v-model="identifier" type="text" required />
      </div>
      <div class="formField">
        <p>Mot de passe :</p>
        <input v-model="password" type="password" required />
      </div>
      <button class="submit" @click="save" :disabled="!formValid">Se connecter</button>
      <button class="secondary" @click="() => router.push({ name: 'signup'})">S'inscrire</button>
    </div>
  </div>
</template>

<style scoped>
.noAccount {
  color: var(--disabled-font);
  margin-top: 1em;
  font-size: 0.9em;
}
</style>