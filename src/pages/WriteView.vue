<script setup lang="ts">
import { type Ref, ref } from 'vue';
import { type Quill, type Delta, QuillEditor } from '@vueup/vue-quill';

const note: Ref<Delta> = ref();
const quill: Ref<Quill> = ref();

const onReady = (editor: Quill) => {
  editor.focus();
  quill.value = editor;
}

const editorSave = () => {
  // Not yet implemented
  console.log('Save not yet implemented');
}
</script>

<template>
  <div class="write">
    <quill-editor v-model:content="note" content-type="delta" toolbar="#toolbar" theme="" @ready="(quill) => onReady(quill)" />

    <div id="toolbar">
      <button class="ql-header" :value="1">T</button>
      <button class="ql-bold">B</button>
      <button class="ql-italic">I</button>
      <button class="ql-list" value="bullet">•</button>
      <button class="ql-list" value="ordered">1</button>
      <button class="ql-list" value="check">✓</button>
      <button class="save" @click="editorSave">Save</button>
    </div>
  </div>
</template>

<style scoped>
.write {
  width: calc(100vw - 4px);
  height: calc(100vh - 4px);
  padding: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

#toolbar button.ql-active {
  background-color: var(--primary);
}

#toolbar .save {
  padding: 2px 5px;
  border-radius: 5px;
  width: fit-content;
}

:deep(.ql-container) {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

:deep(.ql-editor) {
  width: 100%;
  height: 100%;
  text-align: left;
}

:deep(.ql-clipboard) {
  display: none;
}

:deep(.ql-container:focus-visible),
:deep(.ql-container :focus-visible) {
  outline: none;
}
</style>
