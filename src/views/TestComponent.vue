<script setup lang="ts">

// camelCase in JavaScript
const BlogPost = {
  props: ['postTitle'],
  emits: ['updatePost'],
  template: `
    <h3>{{ postTitle }}</h3>
  `
}

function onUpdatePost() {

}

</script>

<template>
  <div>Test</div>

  <!-- kebab-case in HTML -->
  <blog-post post-title="hello!" @update-post="onUpdatePost"></blog-post>

</template>

<style scoped>

</style>