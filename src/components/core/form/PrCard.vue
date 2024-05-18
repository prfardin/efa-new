<script setup lang="ts">


import { CardPropsType } from '@u/props'
import { computed } from 'vue'
import { cardClassObject } from '@u/classes'

const props = withDefaults(defineProps<CardPropsType>(), {

})

const cardClass = computed(() => cardClassObject(props))

</script>

<template>
  <div :class="cardClass">
    <slot />
  </div>
</template>

<style scoped lang="less">

</style>