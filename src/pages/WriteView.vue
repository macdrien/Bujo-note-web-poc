<script setup lang="ts">
import { type Ref, ref } from 'vue';
import { type Quill, QuillEditor } from '@vueup/vue-quill';
import Modal from '../components/Modal.vue';

const quill: Ref<Quill> = ref();
const modalOpen = ref(false);

const onReady = (editor: Quill) => {
  editor.focus();
  quill.value = editor;
}

const editorSave = () => {
  modalOpen.value = true;
  console.log(JSON.stringify(quill.value.getContents().ops));
}

const closeModal = () => {
  modalOpen.value = false;
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
      <button class="save" @click="editorSave">Save</button>
    </div>
  </div>

  <modal v-if="modalOpen" @close="closeModal"> 
    <div class="save-modal">
      <h6>Enregistrer la note</h6>
      <div class="new-note">
        <p>Nouvelle note :</p>
        <input type="text"/>
      </div>
      <div class="note-list">
        <p>Ajouter à :</p>
        <div class="list">
        <ul>
          <li>Note 1</li>
          <li>Note 2</li>
          <li>Note 1</li>
          <li>Note 2</li>
          <li>Note 1</li>
          <li>Note 2</li>
          <li>Note 1</li>
          <li>Note 2</li>
          <li>Note 1</li>
          <li>Note 2</li>
          <li>Note 1</li>
          <li>Note 2</li>
          <li>Note 1</li>
          <li>Note 2</li>
          <li>Note 1</li>
          <li>Note 2</li>
          <li>Note 1</li>
          <li>Note 2</li>
          <li>Note 1</li>
          <li>Note 2</li>
          <li>Note 1</li>
          <li>Note 2</li>
          <li>Note 1</li>
          <li>Note 2</li>
          <li>Note 1</li>
          <li>Note 2</li>
        </ul>
        </div>
      </div>
      <div class="actions">
        <button>Sauvegarder</button>
        <button @click="closeModal">Annuler</button>
      </div>
    </div>
  </modal>
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

.save-modal {
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  height: 100%;
}

.save-modal h6 {
  font-size: 1.5em;
}

.new-note {
  display: flex;
  justify-content: space-between;
}

.note-list {
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 5px;
  height: 100%;
  overflow: hidden;
}

.list {
  overflow: scroll;
}

.actions {
  margin: 0 0.5em 0.5em;
  display: flex;
  justify-content: flex-end;
  gap: 1em;
}

button {
  padding: 5px;
}
</style>
