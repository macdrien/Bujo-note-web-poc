<script setup lang="ts">
import { Delta } from '@vueup/vue-quill';
import { ref } from 'vue';

defineProps({
  note: {
    type: Delta,
    required: true,
  },
});

const newNoteTitle = ref<String>('');
</script>

<template>
  <div class="view">
    <h1>Enregistrer</h1>
    <div class="form">
      <div class="formField">
        <p>Nouvelle note :</p>
        <input v-model="newNoteTitle" />
      </div>
      <button class="submit">Enregistrer</button>
    </div>
  </div>
</template>