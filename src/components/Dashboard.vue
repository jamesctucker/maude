<script setup>
import { ref } from "vue";
import Card from "./Card.vue";
import EmptyState from "./EmptyState.vue";

const results = ref([]);

chrome.runtime.onMessage.addListener(({ name, data }) => {
  console.log("message received", name);
  generateContent(name, data.value);
});

const generateContent = async (command, artifact) => {
  try {
    const url = "https://api.respell.ai/v1/run";

    const payload = {
      spellId: "k5-kybt4dHSqlBy5sZREq",
      inputs: {
        command: command,
        artifact: artifact,
      },
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer bff94e46-b5d9-4779-9489-2c5955ea5208",
      },
      body: JSON.stringify(payload),
    };

    const response = await fetch(url, options);

    const data = await response.json();

    console.log("data", data);
  } catch (error) {
    console.error("Oops, something went wrong", error);
  }
};
</script>
<template>
  <div class="dashboard">
    <EmptyState v-if="results.length === 0" />
    <Card v-else />
  </div>
</template>
