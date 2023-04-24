<script setup lang="ts">
import { Element, icon } from "@bs/scripts/util/util";
import { ref } from 'vue'

// must remove with future release of vue and must use as
// import { InputPropsType } from "@bs/scripts/util/props";
export interface InputPropsType {
    //
}
const props = defineProps<InputPropsType>()

// define template ref
const el = ref<Element>(null)

/**
 * do setIcon and watch props change
 * we need to know which method is better,
 * do setIcon and watch [props.icon, props.ratio] or just watchEffect
 * for now watchEffect used cause its clean
 * maybe need change to Composable icon in future
 */
</script>

<template>
    <input id="" name="" value="" />
</template>
