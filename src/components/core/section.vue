<script setup lang="ts">
import { computed } from 'vue'
import { sectionClassObject } from '@u/classes'

// must remove with future release of vue and must use as
// import { SectionClassType } from "@bs/scripts/util/props"
export interface SectionPropsType {
  default?: boolean
  muted?: boolean
  primary?: boolean
  secondary?: boolean
  preserve?: boolean
  xsmall?: boolean
  small?: boolean
  large?: boolean
  xlarge?: boolean
  paddingRemove?: boolean
}
const props = defineProps<SectionPropsType>()

// define section classes from defined props
const sectionClass = computed(() => sectionClassObject(props))

const emit = defineEmits(['mounted'])
</script>

<template>
  <div :class="sectionClass">
    <slot />
  </div>
</template>
