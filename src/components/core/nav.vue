<script setup lang="ts">
import { Element, nav } from '@u/util'
import { ref, onMounted } from 'vue'

// must remove with future release of vue and must use as
// import { NavPropsType } from "@bs/scripts/util/props"
// must change
export interface NavPropsType {
  hasNavTag?: boolean
}
const props = withDefaults(defineProps<NavPropsType>(), {
  hasNavTag: false
})

// define template ref
const el = ref<Element>(null)

/**
 * set nav
 * maybe need to change in future to prevent using li
 * when defining component
 */
function setNav() {
  return nav(el.value)
}
onMounted(() => {
  setNav()
})
</script>

<template>
  <ul class="uk-nav-default" ref="el">
    <slot />
  </ul>
</template>
