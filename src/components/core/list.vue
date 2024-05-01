<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { listClassObject } from '@u/classes'
import { Element } from '@u/util'

// must remove with future release of vue and must use as
// import { ListPropsType } from "@bs/scripts/util/props"
export interface ListPropsType {
  tag?: 'ul' | 'div' | string
  disc?: boolean
  circle?: boolean
  square?: boolean
  decimal?: boolean
  hyphen?: boolean
  muted?: boolean
  emphasis?: boolean
  primary?: boolean
  secondary?: boolean
  bullet?: boolean
  divider?: boolean
  striped?: boolean
  large?: boolean
  collapse?: boolean
}
const props = withDefaults(defineProps<ListPropsType>(), {
  tag: 'ul'
})

// define section classes from defined props
const listClass = computed(() => listClassObject(props))

// define template ref
const el = ref<Element>(null)

onMounted(() => {
  if (props.tag !== 'ul') el.value.setAttribute('role', 'list')
})
</script>

<template>
  <component :is="tag" :class="listClass" ref="el">
    <slot />
  </component>
</template>
