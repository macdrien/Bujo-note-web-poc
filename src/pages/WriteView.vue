<script setup lang="ts">
import { QuillEditor } from '@vueup/vue-quill';
</script>

<template>
  <div class="write">
    <h1>Write view</h1>
    <QuillEditor toolbar="#toolbar" theme="" @ready="(quill) => quill.focus()" />
      
    <div id="toolbar">
      <button class="ql-header" :value="1">T</button>
      <button class="ql-bold">B</button>
      <button class="ql-italic">I</button>
      <button class="ql-list" value="bullet">.</button>
      <button class="ql-list" value="ordered">1</button>
      <button class="ql-list" value="check">O</button>
    </div>
  </div>
</template>

<style scoped>
.write {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0;
}

#toolbar {
  border: none;
  width: 100%;
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 1em;
  gap: 0.5em;
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

:deep(.ql-editor) {
  width: 100%;
  min-height: 200px;
  text-align: left;
}

:deep(.ql-clipboard) {
  display: none;
}

:deep(ul[data-checked=true] li),
:deep(ul[data-checked=false] li) {
  list-style: none;
}

:deep(ul[data-checked=true] li:before) {
  content: '\2610';
  margin-right: 5px;
}
:deep(ul[data-checked=false] li:before) {
  content: '\2611';
  margin-right: 5px;
}
</style>