<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="background-overlay"></div>
  <header>
    <router-link to="/">
      <img alt="KBP Logo" class="logo" src="@/assets/kbp-logo.svg" height="125"/>
    </router-link>
  </header>
  <RouterView />
  <footer>
    <img 
      alt="Team Groom" class="team-groom-logo"
      src="@/assets/team-groom.svg"
      heigth="100"
    />
  </footer>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

#background-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(ellipse at left, #0674B2 30%, #885CE8);
  opacity: 0.90;
}

header {
  padding: 20px;
}

footer {
  padding: 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: right;
}
</style>
