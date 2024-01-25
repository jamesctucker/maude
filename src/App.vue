<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Dashboard from "./components/Dashboard.vue";
</script>

<template>
  <Header />
  <main>
    <!-- TODO: add "Hello, I hope you're having a great day" message here -->
    <Dashboard />
  </main>
  <Footer />
</template>

<style scoped>
main {
  padding: 1rem;
  margin: 75px 0;
}
</style>
