<script setup lang="ts">
/**
 * for compile icons we use PrIcon components, and
 * it will create the span tag and put icon svg into it
 * but when there is no default slots icons must compile directly into self Link
 * with no span tag, so we used useIcon composable component to prevent
 * from creating additional tag when there is no default slots defined
 */
import { computed, ref, useSlots } from "vue";
import { buttonClassObject } from "@bs/scripts/util/classes";
import { useIcon } from "@bs/scripts/util/util";
import PrIcon from "@bc/core/icon.vue";

// must remove with future release of vue and must use as
// import { ButtonPropsType } from "@bs/scripts/util/props";
interface ButtonPropsType {
    tag?: 'router-link' | 'a',
    to?: string,
    href?: string,
    default?: boolean,
    primary?: boolean,
    secondary?: boolean,
    muted?: boolean,
    xSmall?: boolean,
    rounded?: boolean,
    circle?: boolean,
    collapse?: boolean,
    icon?: string,
    ratio?: number,
}
const props = withDefaults(defineProps<ButtonPropsType>(), {
    tag: 'router-link'
})

// define button classes from defined props
const buttonClass = computed(() => buttonClassObject(props))

// get slots: we check if there is no default slots defined
const slots = useSlots()

// define template ref
const el = ref<HTMLElement>(null)

useIcon(el, props.icon, props.ratio)
</script>

<template>
    <component :is="tag" :to="to" :href="href" :class="buttonClass" ref="el">
        <template v-if="icon && slots.default">
            <pr-icon :icon="icon" :ratio="ratio" />
            <span><slot /></span>
        </template>
        <slot v-else />
    </component>
</template>
