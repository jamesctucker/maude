<script setup>
import { XCircleIcon } from "@heroicons/vue/24/outline";
</script>
<template>
  <button class="delete-button">
    <XCircleIcon class="delete-button__icon" />
  </button>
</template>
<style scoped lang="scss">
.delete-button {
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
