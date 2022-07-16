<script setup lang="ts">
const props = defineProps(["username"]);
const src = `/profiles/${props.username}.jpg`;
</script>

<template>
  <a class="profile-container" :href="`https://instagr.am/${props.username}`">
    <img :src="src" />
    <p class="username">@{{ props.username }}</p>
  </a>
</template>

<style scoped>
a.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin-top: 20px;
  margin: 20px 30px 0px 30px;
  text-decoration: none;
  color: #fff;
}

a.profile-container p {
}

a.profile-container > img {
  width: 80px;
  height: 80px;
  border-radius: 80px;
}
</style>
