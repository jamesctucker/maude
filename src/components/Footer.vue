<script setup>
const handleReset = () => {
  window.location.reload();
};
</script>
<template>
  <footer class="footer">
    <button class="footer__reset-btn" @click="handleReset">Reset</button>
  </footer>
</template>
<style scoped lang="scss">
.footer {
  background: #ffff;
  color: black;
  border-top: 2px solid #d3d6d9;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.25);

  &__reset-btn {
    background: #f0562e;
    color: #ffff;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: #f37c5a;
    }
  }
}
</style>
