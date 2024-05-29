<script setup lang="ts">
import Strip from './strip.vue'
import Wrapper from './wrapper.vue'
</script>

<template>
  <div class="pr-sidebar">
    <strip />
    <wrapper />
  </div>
</template>

<style scoped>
.pr-sidebar {
  z-index: 10;
  height: 100%;
  display: flex;
  position: fixed;
  pointer-events: none;
  top: 0;
  left: 0;
}
</style>