<script setup lang="ts">
/**
 * for compile icons we use PrIcon components, and
 * it will create the span tag and put icon svg into it
 * but when there is no default slots icons must compile directly into self Button
 * with no span tag, so we most prevent from creating additional tag
 * when there is no default slots defined in future
 */
import { useSlots, computed } from "vue";
import { buttonClassObject } from "@bs/scripts/util/classes";
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

// get slots: we check if there is no default slots defined
const slots = useSlots()

// define button classes from defined props
const buttonClass = computed(() => buttonClassObject(props, !!slots.default))
</script>

<template>
    <component :is="tag" :to="to" :href="href" :class="buttonClass">
        <pr-icon :icon="icon" :ratio="ratio" />
        <span v-if="slots.default"><slot /></span>
        <slot v-else />
    </component>
</template>
