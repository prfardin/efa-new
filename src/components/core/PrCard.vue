<script setup lang="ts">
import { CardPropsType } from '@u/props'
import { cardClassObject } from '@u/classes'
import { computed } from 'vue'

const props = withDefaults(defineProps<CardPropsType>(), {

})

const cardClass = computed(() => cardClassObject(props))

</script>

<template>
  <div :class="cardClass">
    <slot />
  </div>
</template>

<style scoped>
.uk-card {
  border: 1px solid transparent;
}

.uk-card-border {
  border-color: #e5e7eb;
}

</style>