<script setup lang="ts">
const props = defineProps(['color', 'to', 'href'])

const actionButton = "action-button";

function navigate_link(){
  window.location = props.href
}

function navigate_link_touch(e){
  window.location = props.href
}
</script>

<template>
  <div v-if="props.href !== undefined">
    <button 
      @click="navigate_link"
      @touchstart="navigate_link_touch"
      :class="['action-button',  props.color != undefined ? 'color-' + props.color : 'no-color' ]">
      <slot/>
    </button>
  </div>
  <div v-else>
    <router-link custom :to="props['to']"
      v-slot="{ href, route, navigate, isActive, isExactActive }" 
    >
    <NavLink>
      <button 
        :active="isActive" :href="href" 
        @click="navigate"
        @touchstart="navigate"
        :class="['action-button',  props.color != undefined ? 'color-' + props.color : 'no-color' ]">
        <slot/>
      </button>
    </NavLink>
    </router-link>
  </div>

</template>

<style scoped>
button.action-button{
  border: 0px;
  margin: 0 5px 0 5px;
  padding: 0 10px 0 10px;
  border-radius: 4px;
  height: 40px;
  min-width: 80px;
  font-weight: 600;
  box-shadow: 1px 3px 7px #444;
  background-color: #FAFAFA;
}

button.action-button.color-red {
  color: #FFF;
  background-color: #D31E5F;
}

button:hover {
  cursor: pointer;
}
</style>
