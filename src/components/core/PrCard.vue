<script setup lang="ts">
import { CardPropsType } from '@u/props'
import { cardClassObject } from '@u/classes'
import { computed, ref } from 'vue'

const props = withDefaults(defineProps<CardPropsType>(), {

})

const cardClass = computed(() => cardClassObject(props))

const el = ref<HTMLElement | null>(null);

defineExpose({ el })

</script>

<template>
  <div :class="cardClass" ref="el">
    <slot />
  </div>
</template>

<style scoped>
.uk-card {
  border: 1px solid transparent;
  &.uk-card-default {
    background-color: #fdfdfd;
  }
  &.uk-card-muted {
    background-color: #f1f5f9;
  }
  &.uk-card-primary {
    background-color: #006af3;
  }
  &.uk-card-border {
    border-color: #e5e7eb;
  }
}


</style>