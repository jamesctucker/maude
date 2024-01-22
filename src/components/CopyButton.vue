<script setup>
import { ClipboardDocumentIcon } from "@heroicons/vue/24/outline";

const emit = defineEmits(["copy"]);
</script>
<template>
  <button class="copy-button" @click="emit('copy')">
    <ClipboardDocumentIcon class="copy-button__icon" />
  </button>
</template>
<style scoped lang="scss">
.copy-button {
  background: none;
  border: none;
  padding: 0;
  color: black;

  &__icon {
    width: 1.25rem;
    height: 1.25rem;
  }

  &:hover {
    cursor: pointer;
    scale: 1.05;
  }
}
</style>
