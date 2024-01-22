<script setup>
import { computed } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});

const wordCount = computed(() => {
  return props.text.split(" ").length;
});
</script>

<template>
  <div class="word-count">
    <p>{{ wordCount }} words</p>
  </div>
</template>

<style scoped lang="scss">
.word-count {
  color: #70747b;
  text-align: right;
  margin-top: 0.5rem;
}
</style>
