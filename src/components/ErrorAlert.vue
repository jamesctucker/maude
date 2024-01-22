<script setup>
import { ExclamationTriangleIcon } from "@heroicons/vue/24/outline";
</script>
<template>
  <div class="error-alert">
    <ExclamationTriangleIcon class="error-alert__icon" />
    <p>Something went wrong. Please try again.</p>
  </div>
</template>
<style lang="scss" scoped>
.error-alert {
  text-align: center;
  background: #b4292a;
  color: white;
  padding: 1rem;
  display: flex;
  align-items: center;

  &__icon {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.5rem;
  }
}
</style>
