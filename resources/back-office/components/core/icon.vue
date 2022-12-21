<script setup lang="ts">
import { useIcon } from "@bs/scripts/util/util";
import { ref } from 'vue'

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

const el = ref<HTMLElement>(null)

useIcon(el, props.icon, props.ratio)
</script>

<template>
    <component :is="tag" ref="el"></component>
</template>
