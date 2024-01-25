<script setup>
import { computed } from "vue";
import CopyButton from "./CopyButton.vue";
import DeleteButton from "./DeleteButton.vue";
import RedoButton from "./RedoButton.vue";

const emit = defineEmits(["remove", "redo"]);

const props = defineProps({
  result: {
    type: Object,
    required: true,
  },
});

const result = computed(() => props.result);

// lookup table that maps the result.command to a human readable string
const commandLookup = {
  generateAltText: "alt text",
  generateMetaTitle: "meta title",
  generateMetaDescription: "meta description",
  summarize: "summary",
  rephrase: "rephrasing",
  fixSpellingAndGrammar: "spelling and grammar",
  improveClarity: "improve clarity",
};

const handleCopy = () => {
  navigator.clipboard.writeText(result.value.generatedText);
};

const handleRedo = () => {
  // TODO: will need to update the logic to replace the original text with the generated text
  emit("redo");
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
        <div class="text-card__action-type">
          {{ commandLookup[result?.command] }}
        </div>
        <RedoButton @redo="handleRedo" />
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

  &__action-type {
    padding: 0.25rem 0.5rem;
    width: fit-content;
    background-color: #70747b;
    color: #fff;
  }
}
</style>
