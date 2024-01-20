<script setup>
import Header from "./components/Header.vue";
// import EmptyState from "./components/EmptyState.vue";
import TextCard from "./components/TextCard/TextCard.vue";
</script>

<template>
  <Header />
  <main>
    <!-- TODO: add "Hello, I hope you're having a great day" message here -->
    <HelloWorld msg="Vite + Vue" />
    <!-- <EmptyState /> -->
    <TextCard />
  </main>
</template>

<style scoped>
main {
  padding: 1rem;
}
</style>
