<script setup lang="ts">
import { computed } from 'vue'
import { containerClassObject } from '@u/classes'

// must remove with future release of vue and must use as
// import { ContainerPropsType } from "@bs/scripts/util/props"
export interface ContainerPropsType {
  xsmall?: boolean
  small?: boolean
  large?: boolean
  xlarge?: boolean
  expand?: boolean
}
const props = defineProps<ContainerPropsType>()

// define section classes from defined props
const containerClass = computed(() => containerClassObject(props))
</script>

<template>
  <div :class="containerClass">
    <slot />
  </div>
</template>
