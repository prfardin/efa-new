<script setup lang="ts">
import { computed } from 'vue'
import { labelClassObject } from "@bs/scripts/util/classes"
import PrIcon from "@bc/core/icon.vue"

// must remove with future release of vue and must use as
import { LabelPropsType } from "@bs/scripts/util/props"
export interface LabelPropsType {
    for: string
    icon?: string
    ratio?: number
    iconClass?: string
}
const props = defineProps<LabelPropsType>()

// define label classes from defined props
const labelClass = computed(() => labelClassObject(props))

</script>

<template>
    <label :class="labelClass" :for="props.for">
        <slot />
        <pr-icon :class="iconClass" :icon="icon" :ratio="ratio" />
    </label>
</template>
