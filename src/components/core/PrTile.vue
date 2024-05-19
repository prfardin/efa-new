<script setup lang="ts">
import { TilePropsType } from '@u/props'
import { tileClassObject } from '@u/classes'
import { computed } from 'vue'

const props = defineProps<TilePropsType>()

// define section classes from defined props
const tileClass = computed(() => tileClassObject(props))
</script>

<template>
  <div :class="tileClass">
    <slot />
  </div>
</template>
