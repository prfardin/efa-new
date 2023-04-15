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

function update(event) {
    ripple(event)
}

onMounted(() => window.addEventListener('mousedown', update))

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

<style>
.vs-ripple-content {
    --vs-color: inherit;
    width: 100px;
    height: 100px;
    position: absolute;
    width: 100%;
    pointer-events: none;
    overflow: hidden;
    height: 100%;
    top: 0px;
    right: 0px;
    border-radius: inherit;
    //z-index: -1;
}
.vs-ripple-content .vs-ripple {
    width: 0px;
    height: 0px;
    border-radius: 50%;
    opacity: 0;
    position: absolute;
    transform: translate(-50%, -50%);
    transition: all 0.5s ease;
    background: radial-gradient(circle, rgba(255,255,255,1), rgba(255,255,255,1));
}
.vs-ripple-content .vs-ripple--solid {
    background: -color(color, 1);
    opacity: 1;
}
.vs-ripple-content .vs-ripple-invert {
    width: 0px;
    height: 0px;
    border-radius: 50%;
    opacity: 0;
    position: absolute;
    transform: translate(-50%, -50%);
    transition: all 0.5s ease;
    background-image: radial-gradient(circle, -color(color, 0.5), -color(color, 0));
}
.vs-ripple-content .vs-ripple-cut-1 {
    width: 0px;
    height: 0px;
    opacity: 0;
    position: absolute;
    transform: translate(-100%, -50%) skew(20deg);
    transition: all 0.6s ease;
    background-image: linear-gradient(270deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%);
}
.vs-ripple-content .vs-ripple-cut-2 {
    width: 0px;
    height: 0px;
    opacity: 0;
    position: absolute;
    transform: translate(0%, -50%) skew(20deg);
    transition: all 0.6s ease;
    background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%);
}
</style>
