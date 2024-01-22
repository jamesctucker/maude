<script setup>
import Card from "./Card.vue";
import EmptyState from "./EmptyState.vue";
import ErrorAlert from "./ErrorAlert.vue";
import { useGenerateContent } from "../composables/useGenerateContent";

const { results, loading, error, mutate, remove, redo } = useGenerateContent();

chrome.runtime.onMessage.addListener(async ({ name, data }) => {
  // TODO: add ability to grab every single image on the page
  //   if (name === "generateBulkAltText") {
  //     const [tab] = await chrome.tabs.query({
  //       active: true,
  //       currentWindow: true,
  //     });
  //     let result;
  //     try {
  //       [{ result }] = await chrome.scripting.executeScript({
  //         target: { tabId: tab.id },
  //         func: () => {
  //           const images = document.getElementsByTagName("img");
  //           const imageUrls = [];
  //           for (let i = 0; i < images.length; i++) {
  //             imageUrls.push(images[i].src);
  //           }
  //           return imageUrls;
  //         },
  //       });
  //     } catch (e) {
  //       console.log(e);
  //       document.body.textContent = "Cannot access page";
  //       return;
  //     }

  //     console.log(result);
  //     return;
  //   }
  mutate(name, data.value);
});
</script>
<template>
  <div class="dashboard">
    <EmptyState v-if="results.length === 0" />
    <div v-if="error" class="dashboard__error">
      <ErrorAlert />
    </div>
    <ul v-if="results.length > 0">
      <Card
        v-for="result in results"
        :key="result.id"
        :result="result"
        @redo="redo(result.id)"
        @remove="remove(result.id)"
      />
    </ul>
    <div class="dashboard__loading" v-if="loading">
      <div class="dashboard__loading-spinner"></div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.dashboard {
  padding: 1rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__loading {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(107, 126, 237, 0.5);
    padding: 1rem;
    box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__loading-spinner {
    border: 8px solid #f3f3f3;
    border-top: 8px solid #3c51f1;
    border-radius: 50%;
    width: 64px;
    height: 64px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  &__error {
    position: fixed;
    bottom: 0;
    margin-bottom: 1rem;
  }
}
</style>
