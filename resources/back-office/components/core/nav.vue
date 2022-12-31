<script setup lang="ts">
import { Element, nav } from "@bs/scripts/util/util";
import { ref, onMounted } from 'vue'

// must remove with future release of vue and must use as
// import { NavPropsType } from "@bs/scripts/util/props";
export interface NavPropsType {
    hasNav?: boolean,
}
const props = withDefaults(defineProps<NavPropsType>(), {
    hasNav: false
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
    <ul ref="el">
        <slot />
    </ul>
</template>
