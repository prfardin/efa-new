<script setup lang="ts">
import { ContainerPropsType } from '@u/props'
import { containerClassObject } from '@u/classes'
import { computed } from 'vue'

const props = defineProps<ContainerPropsType>()

// define section classes from defined props
const containerClass = computed(() => containerClassObject(props))
</script>

<template>
  <div :class="containerClass">
    <slot />
  </div>
</template>
