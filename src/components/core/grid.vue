<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { Element, grid } from "@u/util"
import { gridClassObject } from "@u/classes"

// must remove with future release of vue and must use as
// import { GridPropsType } from "@bs/scripts/util/props"
export interface GridPropsType {
    small?: boolean
    medium?: boolean
    large?: boolean
    collapse?: boolean
    columnSmall?: boolean
    columnMedium?: boolean
    columnLarge?: boolean
    columnCollapse?: boolean
    rowSmall?: boolean
    rowMedium?: boolean
    rowLarge?: boolean
    rowCollapse?: boolean
    divider?: boolean
    match?: boolean
    margin?: string
    firstColumn?: string
    masonry?: boolean
    parallax?: number
}
const props = defineProps<GridPropsType>()

// define template ref
const el = ref<Element>(null)

// define grid classes from defined props
const gridClass = computed(() => gridClassObject(props))

/**
 * we define all available options as props and
 * send it to gid function of UIkit.
 * it also sends undefined props to grid function.
 * we must check it in future if it reduces effectivity
 * it must be prevented and reworked
 */
onMounted(() => {
    grid(el.value, {
        margin: props.margin,
        'first-column': props.firstColumn,
        masonry: props.masonry,
        parallax: props.parallax
    });
})
</script>

<template>
    <div :class="gridClass" ref="el">
        <slot />
    </div>
</template>
