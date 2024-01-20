<script setup>
import { ArrowPathIcon } from "@heroicons/vue/24/outline";
const redo = () => {
  console.log("Redo");
};
</script>
<template>
  <button class="redo-button" @click="redo">
    <ArrowPathIcon class="redo-button__icon" />
    Redo
  </button>
</template>
<style scoped lang="scss">
.redo-button {
  display: flex;
  align-items: center;
  border: 0.5px solid black;
  border-radius: 4px;
  background-color: white;
  color: black;
  padding: 0.25rem 0.5rem;

  &__icon {
    width: 0.75rem;
    height: 0.75rem;
    margin-right: 0.25rem;
  }

  &:hover {
    cursor: pointer;
    scale: 1.05;
  }
}
</style>
