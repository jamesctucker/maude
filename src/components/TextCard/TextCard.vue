<script setup>
import { ref } from "vue";
import CopyButton from "./CopyButton.vue";
import DeleteButton from "./DeleteButton.vue";
import WordCount from "./WordCount.vue";
import RedoButton from "./RedoButton.vue";

const copy =
  ref(`This is an example of text. What actions should go on this card? I hope
        this helps Logan and Claire. Hello world! This is an example of text.
        What actions should go on this card? I hope this helps Logan and Claire.
        Hello world! This is an example of text. What actions should go on this
        card? I hope this helps Logan and Claire. Hello world!`);
</script>

<template>
  <div class="text-card">
    <div class="text-card__inset">
      <div class="text-card__actions"><DeleteButton /> <CopyButton /></div>
      <p>
        {{ copy }}
      </p>
      <div class="text-card__actions">
        <RedoButton /><WordCount :text="copy" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.text-card {
  text-align: left;
  background: linear-gradient(63deg, #3c51f1 2.88%, #f03742 98.95%);
  padding: 0.75rem;
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
