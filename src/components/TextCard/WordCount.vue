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
