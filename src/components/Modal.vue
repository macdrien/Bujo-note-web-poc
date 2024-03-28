<script setup>
const emit = defineEmits(['close']);
</script>

<template>
  <div class="modal-wrapper">
    <div class="modal-blur" @click="() => emit('close')"/>
    <div class="modal">
      <slot/>
    </div>
  </div>
</template>

<style scoped>
.modal-wrapper {
  position: absolute;
  top: 0;
  left: 0;

  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
}

.modal-blur {
  z-index: 1;

  width: 100vw;
  height: 100vh;

  background-color: var(--text);
  opacity: 0.3;
}

.modal {
  z-index: 2;

  justify-self: center;
  align-self: center;

  position: absolute;

  width: 90vw;
  height: 60vh;
  max-height: 60vh;

  border-radius: 10px;
  box-shadow: var(--text) 1px 1px 5px;

  background-color: var(--background);
}
</style>