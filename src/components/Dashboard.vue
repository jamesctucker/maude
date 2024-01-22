<script setup>
import Card from "./Card.vue";
import EmptyState from "./EmptyState.vue";
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

  console.log("message received", name);
  mutate(name, data.value);
});
</script>
<template>
  <div class="dashboard">
    <EmptyState v-if="results.length === 0" />
    <ul v-else>
      <Card
        v-for="result in results"
        :key="result.id"
        :result="result"
        @redo="redo(result.id)"
        @remove="remove(result.id)"
      />
    </ul>
    <!-- TODO: add a placeholder card during loading state -->
  </div>
</template>
