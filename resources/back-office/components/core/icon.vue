<script setup lang="ts">
/**
 * do setIcon and watch if icon props changed.
 * we need to know which method is better,
 * do setIcon and watch [props.icon, props.ratio] or just watchEffect
 * for now watchEffect used cause its clean
 */
import { ref, onMounted, watchEffect } from 'vue'
import { icon, IconElement } from '@bs/scripts/util/util'
import { IconPropsType } from "@bs/scripts/util/props";

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

const el = ref<IconElement>(null)

function setIcon() {
    icon(el.value, props.icon, props.ratio)
}

onMounted(() => {
    watchEffect(setIcon)
})
</script>

<template>
    <component :is="tag" ref="el"></component>
</template>
