<script setup>
import { ref } from "vue";
import Card from "./Card.vue";
import EmptyState from "./EmptyState.vue";

const objId = ref(0);
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
    // the object in outputs has a dynamic key, so we need to use bracket notation
    const output = data?.outputs[Object.keys(data.outputs)[0]];

    objId.value++;

    const obj = {
      id: objId.value,
      command: command,
      originalText: artifact,
      generatedText: output,
    };

    results.value = [...results.value, obj];
  } catch (error) {
    console.error("Oops, something went wrong", error);
  }
};

const handleRemove = (id) => {
  const index = results.value.findIndex((result) => result.id === id);
  results.value.splice(index, 1);
};
</script>
<template>
  <div class="dashboard">
    <EmptyState v-if="results.length === 0" />
    <ul v-else>
      <Card
        v-for="result in results"
        :key="result.id"
        :result="result"
        @remove="handleRemove"
      />
    </ul>
    <!-- TODO: add a placeholder card during loading state -->
  </div>
</template>
