<script setup lang="ts">
import { computed } from 'vue'
import { spinnerClassObject } from "@u/classes";

// must remove with future release of vue and must use as
// import { SpinnerPropsType } from "@bs/scripts/util/props"
export interface SpinnerPropsType {
    tag?: 'span' | string
    mode?: 'line' | 'circle'
}
const props = withDefaults(defineProps<SpinnerPropsType>(), {
    tag: 'span',
    mode: 'line'
})

// define button classes from defined props
const spinnerClass = computed(() => spinnerClassObject(props))

</script>

<template>
    <component :is="tag" :class="spinnerClass">
        <span></span>
        <span></span>
        <span></span>
    </component>
</template>
