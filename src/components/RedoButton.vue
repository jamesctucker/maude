<script setup>
import { ArrowPathIcon } from "@heroicons/vue/24/outline";

const emit = defineEmits(["redo"]);
</script>
<template>
  <button class="redo-button" @click="emit('redo')">
    <ArrowPathIcon class="redo-button__icon" />
    Redo
  </button>
</template>
<style scoped lang="scss">
.redo-button {
  display: flex;
  align-items: center;
  border: 1px solid #70747b;
  background-color: white;
  color: black;
  padding: 0.25rem 0.5rem;

  &__icon {
    width: 0.85rem;
    height: 0.85rem;
    margin-right: 0.45rem;
  }

  &:hover {
    cursor: pointer;
    scale: 1.05;
  }
}
</style>
