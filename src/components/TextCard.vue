<template>
  <div class="text-card">
    <div class="text-card__inset">
      <p>
        This is an example of text. What actions should go on this card? I hope
        this helps Logan and Claire. Hello world!
      </p>
    </div>
  </div>
</template>
<style scoped lang="scss">
.text-card {
  text-align: left;
  background: linear-gradient(63deg, #3c51f1 2.88%, #f03742 98.95%);
  padding: 0.5rem;
  border-radius: 6px;
  position: relative;

  &__inset {
    background: #fff;
    padding: 1rem;
    border-radius: 6px;

    p {
      margin: 0;
    }
  }
}
</style>
