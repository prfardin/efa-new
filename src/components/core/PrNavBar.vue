<script setup lang="ts">
import PrContainer from '@c/core/PrContainer.vue'
import { onMounted, ref } from 'vue'
import { navbar, RefElement } from '@u/util'


const el =  ref<RefElement>(null)

onMounted(() => {
  navbar(el.value, {

  })

})

</script>

<template>
  <nav class="uk-navbar-container">
    <pr-container>
      <div ref="el">
        <slot />
      </div>
    </pr-container>
  </nav>
</template>

<style scoped>

</style>