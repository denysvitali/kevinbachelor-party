<script setup lang="ts">
const props = defineProps(["color", "to", "href"]);
</script>

<template>
  <div v-if="props.href !== undefined">
      <a
        :href="href"
        :class="[
          'action-button',
          { [`color-${props.color}`]: !!props.color },
          { 'no-color': !props.color },
        ]"
      >
      <slot />
    </a>
  </div>
  <div v-else>
    <router-link custom :to="props['to']" v-slot="{ href, navigate, isActive }">
      <a
        :active="isActive"
        :href="href"
        :class="[
          'action-button',
          { [`color-${props.color}`]: !!props.color },
          { 'no-color': !props.color },
        ]"
      >
        <slot />
      </a>
    </router-link>
  </div>
</template>

<style scoped>
.action-button {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 0px;
  margin: 0 5px 0 5px;
  padding: 0 10px 0 10px;
  border-radius: 4px;
  height: 40px;
  min-width: 80px;
  font-weight: 600;
  box-shadow: 1px 3px 7px #444;
  background-color: #fafafa;
  text-decoration: none;
  color: #000;
  position: relative;
  z-index: 1;
}

.action-button.color-red {
  color: #fff;
  background-color: #d31e5f;
}

.action-button:hover {
  cursor: pointer;
}
</style>
