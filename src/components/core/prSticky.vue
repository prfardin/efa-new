<script setup lang="ts">

import { onMounted, ref } from 'vue'
import { RefElement } from '@u/util'
import UIkit from 'uikit'

const el = ref<RefElement>(null)

onMounted(() => {
  UIkit.sticky()

})

</script>

<template>
  <div>

  </div>

</template>

<style scoped>

</style>