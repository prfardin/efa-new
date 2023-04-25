<script setup lang="ts">
import { Element } from "@bs/scripts/util/util";
import { computed, ref } from 'vue'
import { inputClassObject } from "@bs/scripts/util/classes";

// must remove with future release of vue and must use as
import { InputPropsType } from "@bs/scripts/util/props";
export interface InputPropsType {
    type?: 'text' | string,
    value?: any,
    danger?: boolean,
    success?: boolean,
    warning?: boolean,
    disabled?: boolean,
    large?: boolean,
    small?: boolean,
    width?: string,
    blank ?: boolean
}
const props = withDefaults(defineProps<InputPropsType>(), {
    type: 'text'
})

// define input classes from defined props
const inputClass = computed(() => inputClassObject(props))

defineProps(['modelValue'])
defineEmits(['update:modelValue'])

</script>

<template>
    <input id="" name="" :type="type" :value="value" :class="inputClass" @input="$emit('update:modelValue', $event.target.value)" />
</template>
