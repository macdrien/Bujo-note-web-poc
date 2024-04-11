<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { login } from '../router';

const router = useRouter();
const formFields = ref({
  pseudo: '',
  email: '',
  password: '',
  passwordConfirm: '', 
});

const formValid = computed(() => {
  const { pseudo, email, password, passwordConfirm } = formFields.value;
  return pseudo.length >= 4 && email.length >= 4 && password.length >= 8 && password === passwordConfirm;
});

const signup = () => {
  if (formValid) {
    const { pseudo, password } = formFields.value;
    login(pseudo, password);
  };
}
</script>

<template>
<div class="view">
  <h1>S'inscrire</h1>
  <div class="form">
    <div class="formField">
      <p>Pseudo :</p>
      <input v-model="formFields.pseudo" type="text" required />
    </div>
    <div class="formField">
      <p>Email :</p>
      <input v-model="formFields.email" type="email" required />
    </div>
    <div class="formField">
      <p>Mot de passe :</p>
      <input v-model="formFields.password" type="password" required />
    </div>
    <div class="formField">
      <p>Confirmez le mot de passe :</p>
      <input v-model="formFields.passwordConfirm" type="password" required />
    </div>
    <button class="submit" @click="signup" :disabled="!formValid">S'inscrire</button>
    <button class="secondary" @click="() => router.push({ name: 'login'})">Se connecter</button>
  </div>
</div>
</template>