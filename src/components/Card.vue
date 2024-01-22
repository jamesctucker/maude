<script setup>
import { computed, ref } from "vue";
import CopyButton from "./CopyButton.vue";
import DeleteButton from "./DeleteButton.vue";
import WordCount from "./WordCount.vue";
import RedoButton from "./RedoButton.vue";

const emit = defineEmits(["remove"]);

const props = defineProps({
  result: {
    type: Object,
    required: true,
  },
});

const result = computed(() => props.result);

const handleCopy = () => {
  navigator.clipboard.writeText(result.value.generatedText);
};
</script>

<template>
  <li class="text-card">
    <div class="text-card__inset">
      <div class="text-card__actions">
        <DeleteButton @delete="emit('remove')" />
        <CopyButton @copy="handleCopy" />
      </div>
      <p>
        {{ result?.generatedText }}
      </p>
      <div class="text-card__actions">
        <RedoButton /><WordCount :text="result?.generatedText" />
      </div>
    </div>
  </li>
</template>
<style scoped lang="scss">
.text-card {
  text-align: left;
  background: linear-gradient(63deg, #3c51f1 2.88%, #f03742 98.95%);
  padding: 0.75rem;
  margin-bottom: 1rem;
  position: relative;

  &__inset {
    background: #fff;
    padding: 0.75rem;
    box-shadow: 4px 5px 8px rgba(0, 0, 0, 0.25);

    p {
      margin: 0;
      padding: 0.75rem 0;
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
