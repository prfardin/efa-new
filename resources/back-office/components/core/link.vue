<script setup lang="ts">
/**
 * for compile icons we use PrIcon components, and
 * it will create the span tag and put icon svg into it
 * but when there is no default slots icons must compile directly into self link
 * with no span tag, so in future we must remove addition span tag
 * when there is no default slots defined
 */
import { computed, defineProps, useSlots } from "vue";
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

// define button classes from defined props
const buttonClass = computed(() => buttonClassObject(props))

const slots = useSlots()
</script>

<template>
    <component :is="tag" :to="to" :href="href" :class="buttonClass">
        <template v-if="icon">
            <pr-icon :icon="icon" :ratio="ratio" />
            <span v-if="slots.default"><slot /></span>
        </template>
        <slot v-else />
    </component>
</template>
