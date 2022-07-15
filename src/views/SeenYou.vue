<script setup lang="ts">
import ActionButton from '@/components/ActionButton.vue'
</script>

<template>
  <div class="seen-you">
    <h1>Have you seen us?</h1>
    <p>
      If you've seen us around and you took a picture with us,
      or you're simply curious about our bachelor party - check out
      the pictures and upload the one we took together!
    </p>
    <ActionButton 
      color="red" 
      href="https://photos.app.goo.gl/fMTP9JCMGXvgSmfa8"
    >Add your pictures</ActionButton>
  </div>
</template>

<style>
div.seen-you {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    align-items: top;
    padding: 50px;
}

div.seen-you p {
  margin: 1em 0 1em 0;
}
</style>
