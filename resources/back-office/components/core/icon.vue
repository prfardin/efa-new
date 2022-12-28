<script setup lang="ts">
import { ICONElement, icon } from "@bs/scripts/util/util";
import { ref, onMounted, watchEffect } from 'vue'

// must remove with future release of vue and must use as
// import { IconPropsType } from "@bs/scripts/util/props";
export interface IconPropsType {
    tag?: 'span' | string,
    icon: string,
    ratio?: number
}
const props = withDefaults(defineProps<IconPropsType>(), {
    tag: 'span'
})

// define template ref
const el = ref<ICONElement>(null)

/**
 * do setIcon and watch props change
 * we need to know which method is better,
 * do setIcon and watch [props.icon, props.ratio] or just watchEffect
 * for now watchEffect used cause its clean
 * maybe need change to Composable icon in future
 */
function setIcon() {
    return icon(el.value, props.icon, props.ratio)
}
onMounted(() => {
    watchEffect(setIcon)
})
</script>

<template>
    <component :is="tag" ref="el"></component>
</template>
