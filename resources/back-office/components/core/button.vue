<script setup lang="ts">
/**
 * for compile icons we use PrIcon components, and
 * it will create the span tag and put icon svg into it
 * but when there is no default slots icons must compile directly into self Button
 * with no span tag, in future we most prevent from creating additional tag
 * when there is no default slots defined
 */
import { useSlots, computed } from "vue"
import { RouteLocationRaw } from "vue-router"
import { buttonClassObject } from "@bs/scripts/util/classes"
import PrIcon from "@bc/core/icon.vue"

// we must redesign ripple util and then use it. it's just for test
import { useRipple } from "@bs/scripts/util/ripple"

// must remove with future release of vue and must use as
// import { ButtonPropsType } from "@bs/scripts/util/props"
interface ButtonPropsType {
    tag?: 'router-link' | 'a' | 'button'
    to?: RouteLocationRaw
    href?: string
    slotClass?: string
    ripple?: boolean
    default?: boolean
    primary?: boolean
    secondary?: boolean
    muted?: boolean
    text?: boolean
    small?: boolean
    xSmall?: boolean
    square?: boolean
    rounded?: boolean
    circle?: boolean
    collapse?: boolean
    icon?: string
    iconButton?: boolean
    ratio?: number
    iconClass?: string
    width?: string
}
const props = withDefaults(defineProps<ButtonPropsType>(), {
    tag: 'router-link'
})

// get slots: we check if there is no default slots defined
const slots = useSlots()

// define button classes from defined props
const buttonClass = computed(() => buttonClassObject(props, !!slots.default))

const emit = defineEmits(['mousedown'])

function onMouseDown(event) {
    /**
     * must change in future & we need to discover
     * if there is a way to use some function or attribute without condition
     * with boolean props defined, ex : if (props.x) use x()
     * change it to something like directives
     */
    if (props.ripple) useRipple(event)
    emit('mousedown')
}

</script>

<template>
    <component :is="tag" :to="to" :href="href" :class="buttonClass" @mousedown="onMouseDown">
        <template v-if="icon">
            <pr-icon :class="iconClass" :icon="icon" :ratio="ratio" />
            <span :class="slotClass" v-if="slots.default"><slot /></span>
        </template>
        <slot v-else />
    </component>
</template>
