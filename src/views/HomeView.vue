<script setup lang="ts">
import TheWelcome from '@/components/TheWelcome.vue'
import ActionButton from '@/components/ActionButton.vue'
</script>

<template>
  <main>
    <TheWelcome />
    <div class="buttons">
      <ActionButton color="red" to="/seen-you">I've seen you</ActionButton>
      <ActionButton to="/faq">FAQ</ActionButton>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
}

div.buttons {
  display: flex;
  justify-content: center;
}
</style>