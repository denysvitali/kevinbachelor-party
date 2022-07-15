<script setup lang="ts">
const props = defineProps(['username'])

function navigate_profile(){
  window.location.assign(`https://instagr.am/${props.username}`);
}
</script>

<template>
  <div class="profile-container" @click="navigate_profile">
    <img :src="'/assets/profiles/' + props.username + '.jpg'"/>
    <p class="username">@{{ props.username }}</p>
  </div>
</template>

<style scoped>
div.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin-top: 20px;
  margin: 20px 30px 0px 30px;
}

div.profile-container p {

}

div.profile-container > img {
  width: 80px;
  height: 80px;
  border-radius: 80px;
}
</style>