<script setup lang="ts">
import { type Quill, QuillEditor } from '@vueup/vue-quill';
import { type Ref, ref } from 'vue';

const quill: Ref<Quill> = ref();

const onReady = (editor: Quill) => {
  editor.focus();
  quill.value = editor;
}

const save = () => {
  console.log(quill.value);
}
</script>

<template>
  <div class="write">
    <quill-editor content-type="html" toolbar="#toolbar" theme="" @ready="(quill) => onReady(quill)" />

    <div id="toolbar">
      <button class="ql-header" :value="1">T</button>
      <button class="ql-bold">B</button>
      <button class="ql-italic">I</button>
      <button class="ql-list" value="bullet">•</button>
      <button class="ql-list" value="ordered">1</button>
      <button class="ql-list" value="check">✓</button>
      <button class="save" @click="save">Save</button>
    </div>
  </div>
</template>

<style scoped>
.write {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#toolbar {
  position: absolute;
  bottom: 1vh;
  left: 0;
  border: none;
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 0.5em;
  padding: 5px
}

#toolbar button {
  border: none;
  background-color: var(--secondary);
  border-radius: 50%;
  height: 32px;
  width: 32px;
  padding: 0;
  margin: 0;
  font-weight: bold;
}

#toolbar .save {
  padding: 2px 5px;
  border-radius: 5px;
  width: fit-content;
}

:deep(.ql-container) {
  box-sizing: border-box;
}

:deep(.ql-editor) {
  width: 100vw;
  height: 100vh;
  text-align: left;
}

:deep(.ql-clipboard) {
  display: none;
}
</style>
