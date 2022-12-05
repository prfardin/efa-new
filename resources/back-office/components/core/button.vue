<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ href: string }>()

const emit = defineEmits<{
    (e: 'change', id: number): void
    (e: 'update', value: string): void
}>()

emit('change', 1)

const count = ref(0)
</script>

<template>
    <router-link to="/about" class="uk-button uk-button-default" @click="$emit('change')" active-class="uk-button-primary">Go to About</router-link>
</template>
