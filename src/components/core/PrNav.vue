<script setup lang="ts">
import { NavPropsType } from '@u/props'
import { nav, RefElement } from '@u/util'
import { ref, onMounted } from 'vue'


// must change
const props = withDefaults(defineProps<NavPropsType>(), {
  hasNavTag: false
})

// define template ref
const el = ref<RefElement>(null)

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
