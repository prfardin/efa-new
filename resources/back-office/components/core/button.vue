<script setup lang="ts">
/**
 * for compile icons we use PrIcon components, and
 * it will create the span tag and put icon svg into it
 * but when there is no default slots icons must compile directly into self Button
 * with no span tag, so we most prevent from creating additional tag
 * when there is no default slots defined in future
 */
import {useSlots, computed, ref, onMounted} from "vue";
import { buttonClassObject } from "@bs/scripts/util/classes";
import PrIcon from "@bc/core/icon.vue";
import ripple from "../../src/scripts/core/ripple";

// must remove with future release of vue and must use as
import { ButtonPropsType } from "@bs/scripts/util/props";
import {Element} from "../../src/scripts/util/util";
interface ButtonPropsType {
    tag?: 'router-link' | 'a' | 'button',
    to?: string,
    href?: string,
    slotClass?: string,
    default?: boolean,
    primary?: boolean,
    secondary?: boolean,
    muted?: boolean,
    small?: boolean,
    xSmall?: boolean,
    square?: boolean,
    rounded?: boolean,
    circle?: boolean,
    collapse?: boolean,
    icon?: string,
    iconButton?: boolean,
    ratio?: number,
    iconClass?: string,
    width?: string
}
const props = withDefaults(defineProps<ButtonPropsType>(), {
    tag: 'router-link'
})

// get slots: we check if there is no default slots defined
const slots = useSlots()

// define button classes from defined props
const buttonClass = computed(() => buttonClassObject(props, !!slots.default))

onMounted(() => {
    window.addEventListener('mousedown', ripple)
})

</script>

<template>
    <component :is="tag" :to="to" :href="href" :class="buttonClass">
        <template v-if="icon">
            <pr-icon :class="iconClass" :icon="icon" :ratio="ratio" />
            <span :class="slotClass" v-if="slots.default"><slot /></span>
        </template>
        <slot v-else />
    </component>
</template>
