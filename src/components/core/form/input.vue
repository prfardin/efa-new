<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { inputClassObject, inputIconClassObject } from "@u/classes"
import PrIcon from "@c/core/icon.vue"

// must remove with future release of vue and must use as
import { InputPropsType } from "@u/props"

const props = withDefaults(defineProps<InputPropsType>(), {
    type: 'text'
})

// define input classes from defined props
const inputClass = computed(() => inputClassObject(props))
const iconClass = computed(() => inputIconClassObject(props))

// define template ref
const input = ref<HTMLInputElement>(null)

// input emits
const emit = defineEmits(['update:modelValue'])

// set input value and update on input change, set it to model
const value = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit('update:modelValue', value)
    }
})

/**
 * we have different mod for input, so we need
 * to bind props on an object and set all props to every input
 * on every mod we define, we also want to prevent to define another component,
 * so we use this way, may need change it in future because we believe there
 * is better practice.
 */
const bindProps = {
    ref: input,
    id: props.label || props.id,
    name: props.name,
    type: props.type,
    autofocus: props.autofocus,
    class: inputClass.value,
    ariaLabel: props.ariaLabel
}

</script>

<template>
    <div>
        <div v-if="icon" class="uk-inline">
            <label v-if="label" :for="label"></label>
            <pr-icon :class="iconClass" :icon="icon" :ratio="ratio" />
            <input v-model="value" v-bind="bindProps" />
        </div>
        <template v-else>
            <label v-if="label" :for="label"></label>
            <input v-model="value" v-bind="bindProps"/>
        </template>
    </div>
</template>
