<script setup lang="ts">
/**
 * for compile icons we use PrIcon components, and
 * it will create the span tag and put icon svg into it
 * but when there is no default slots icons must compile directly into self Button
 * with no span tag, so we most prevent from creating additional tag
 * when there is no default slots defined in future (just link button component).
 */
import { useSlots, computed } from "vue";
import { linkClassObject } from "@bs/scripts/util/classes";
import PrIcon from "@bc/core/icon.vue";

// must remove with future release of vue and must use as
// import { LinkPropsType } from "@bs/scripts/util/props";
interface LinkPropsType {
    tag?: 'router-link' | 'a',
    to?: string,
    href?: string,
    muted?: boolean,
    text?: boolean,
    heading?: boolean,
    reset?: boolean,
    toggle?: boolean,
    icon?: string,
    ratio?: number,
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
            <pr-icon :icon="icon" :ratio="ratio" />
            <span v-if="slots.default"><slot /></span>
        </template>
        <slot v-else />
    </component>
</template>
