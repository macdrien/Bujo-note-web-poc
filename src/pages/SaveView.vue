<script setup lang="ts">
import { Delta, QuillEditor } from '@vueup/vue-quill';
import { ref } from 'vue';

const props = defineProps({
  note: {
    type: Delta,
    required: true,
  },
});

const noteToSave = ref<Delta>(props.note);
</script>

<template>
  <quill-editor v-model:content="noteToSave" content-type="delta" theme="" :enable="false" :read-only="true" :toolbar="undefined" />
</template>

<style scoped>
:deep(.ql-clipboard) {
  display: none;
}
</style>