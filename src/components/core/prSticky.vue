<script setup lang="ts">

import { onMounted, ref } from 'vue'
import { RefElement, sticky } from '@u/util'
import UIkit from 'uikit'

const el = ref<RefElement>(null)

onMounted(() => {
  sticky(el.value, {

  })

})

</script>

<template>
  <div ref="el">

  </div>

</template>

<style scoped>

</style>