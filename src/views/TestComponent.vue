<script setup lang="ts">
import { ref } from 'vue'
import PrContainer from '@c/core/PrContainer.vue'
import PrSection from '@c/core/PrSection.vue'
import PrSelectBox from '@c/core/form/PrSelectBox.vue'

const url = ref(`/`)

const data = ref<any>([
  {title: 'ttt', content: 'ttt'},
  {title: 'tttt', content: 'tttt'},
  {title: 'ttttt', content: 'ttttt'},
  {title: 'tttttt', content: 'tttttt'}
])

</script>

<template>
  <pr-section>
    <pr-container small>
      <pr-select-box name="test" v-model="data.content" :lists="data" searchable />
    </pr-container>
  </pr-section>
</template>

<style scoped>
.pr-overflow-x-auto {
  overflow-x: auto;
}

</style>