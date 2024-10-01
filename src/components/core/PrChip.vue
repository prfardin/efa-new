<script setup lang="ts">
import { ChipPropsType } from '@u/props'
import { chipClassObject } from '@u/classes'
import { computed } from 'vue'

const props = withDefaults(defineProps<ChipPropsType>(), {
  mode: 'solid',
  rounded: 'none',
  color: 'default'
})

const chipClass = computed(() => chipClassObject(props))

</script>

<template>
<span :class="chipClass">test</span>
</template>

<style scoped>
</style>