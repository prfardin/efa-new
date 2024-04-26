<script setup lang="ts">
/**
 * for compile icons we use PrIcon components, and
 * it will create the span tag and put icon svg into it
 * but when there is no default slots icons must compile directly into self Button
 * with no span tag, so we most prevent from creating additional tag
 * when there is no default slots defined in future (just link button component).
 */
import { useSlots, computed } from "vue"
import { RouteLocationRaw } from "vue-router"
import { linkClassObject } from "@u/classes"
import PrIcon from "@c/core/icon.vue"

// must remove with future release of vue and must use as
// import { LinkPropsType } from "@bs/scripts/util/props"
interface LinkPropsType {
    tag?: 'router-link' | 'a'
    to?: RouteLocationRaw
    href?: string
    slotClass?: string
    muted?: boolean
    text?: boolean
    heading?: boolean
    reset?: boolean
    toggle?: boolean
    icon?: string
    iconClass?: string
    ratio?: number
}
const props = withDefaults(defineProps<LinkPropsType>(), {
    tag: 'router-link'
})

// get slots: we check if there is no default slots defined
const slots = useSlots()

// define button classes from defined props
const linkClass = computed(() => linkClassObject(props, !!slots.default))
</script>

<template>
    <component :is="tag" :to="to" :href="href" :class="linkClass">
        <template v-if="icon">
            <slot name="before"></slot>
            <pr-icon :class="iconClass" :icon="icon" :ratio="ratio" />
            <span :class="slotClass" v-if="slots.default"><slot /></span>
            <slot name="after"></slot>
        </template>
        <template v-else>
            <slot name="before"></slot>
            <slot />
            <slot name="after"></slot>
        </template>
    </component>
</template>
