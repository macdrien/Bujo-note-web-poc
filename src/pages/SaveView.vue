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
  <div class="saveView">
    <h1>Enregistrer</h1>
    <div class="newNote">
      <h2>Nouvelle note :</h2>
      <input v-model="newNoteTitle" />
    </div>
    <button>Enregistrer</button>
  </div>
</template>

<style scoped>
.saveView {
  height: 100vh;
  width: 100vw;
  padding: 10px;
  position: relative;
}

h1 {
  margin-bottom: 1em;
}

.newNote {
  display: flex;
  gap: 10px;
}

button {
  margin-top: 1em;
}
</style>