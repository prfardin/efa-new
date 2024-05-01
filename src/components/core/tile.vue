<script setup lang="ts">
import { computed } from 'vue'
import { tileClassObject } from '@u/classes'

// must remove with future release of vue and must use as
// import { TilePropsType } from "@bs/scripts/util/props"
export interface TilePropsType {
  xsmall?: boolean
  small?: boolean
  large?: boolean
  xlarge?: boolean
  paddingRemove?: boolean
}
const props = defineProps<TilePropsType>()

// define section classes from defined props
const tileClass = computed(() => tileClassObject(props))
</script>

<template>
  <div :class="tileClass">
    <slot />
  </div>
</template>
